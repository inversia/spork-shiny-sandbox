#!/usr/bin/env node

import fs from 'fs'
import readline from 'readline'

const source = './l10n.md'
const target = './src/L10n/l10n.json'

;(async () => {

    const lines = readline.createInterface ({
        input: fs.createReadStream (source),
        crlfDelay: Infinity,
    })

    let variables = []
    let variable = undefined

    for await (const line of lines) {

        if (!line.startsWith ('|')) {
            if (variable) {
                variables.push (variable)
                variable = undefined
            }
            continue
        }

        if (!variable) variable = {}

        const [key, value = ''] = line.replace (/^\| ([^ ]+) \| ([^|]*)\|*/, '$1;$2')
                                      .trim ()
                                      .split (';')

        if (key === '-') continue

        variable[key] = value.includes ('* ') ? value.split ('* ').filter (Boolean) : value
    }

    const keysByLanguage = {}
    const languagesByKey = {}

    for (let { name, ...values } of variables) {

        if (!name) throw new Error ('Undefined variable: ' + JSON.stringify ({ name, ...values }))

        languagesByKey[name] = values

        for (let language in values) {

            if (!keysByLanguage[language]) keysByLanguage[language] = {}

            keysByLanguage[language][name] = values[language]
        }
    }

    fs.writeFileSync (target, JSON.stringify ({ languagesByKey, keysByLanguage }))

}) ()
