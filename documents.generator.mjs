#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs'
import { execSync } from 'child_process'
import marked from 'marked'

function getAttributes (file, language) {
    const html = marked (readFileSync (`./documents/${ file }.${ language }.md`, 'utf-8'))
    const modified = new Date (execSync (`git log -1 --pretty="format:%ci" ./documents/${ file }.${ language }.md`).toString ())
    return { html, modified }
}

const files = ['userAgreement', 'privacyPolicy', 'privacyAgreement']
const languages = ['en', 'ru']

const documents = {}

for (const language of languages) {

    for (const file of files) {

        const { html, modified } = getAttributes (file, language)

        documents[language] = {
            
            ...documents[language],
            [file + 'Html']: html,
            [file + 'Modified']: modified
        }
    }
}

writeFileSync ('./src/L10n/documents.json', JSON.stringify (documents))
