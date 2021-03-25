/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react'
import { storage } from '~/storage'
import { keysByLanguage } from './l10n.json'
import documents from './documents.json'

export type SupportedLanguage = 'en' | 'ru'

const langs: { [key in SupportedLanguage]: string[] } = {
    ru: [
        'олбанского',
        'чеченского',
        'синдаринского',
        'клингонского',
        'эсперанто',
        'мандаринского',
        'словенского',
        'зороастрийского',
        'калмыцкого',
        'пираха',
        'монгольского',
        'литовского'
    ],
    en: [
        'Olbanian',
        'Chechen',
        'Sindarin',
        'Klingon',
        'Esperanto',
        'Mandarin',
        'Slovenian',
        'Zoroastrian',
        'Kalmyk',
        'Piraha',
        'Mongolian',
        'Lithuanian'
    ]
}

const cities: { [key in SupportedLanguage]: string[] } = {
    ru: [
        'Шавене',
        'Антарктике',
        'Уганде',
        'Мадагаскаре',
        'Бобруйске',
        'Лас-вегасе',
        'Омске',
        'Детройте',
        'Эль-Курайяте',
        'Дампире',
        'Таупо',
        'Суккуре'
    ],
    en: [
        'Shavena',
        'Antarctica',
        'Uganda',
        'Madagascar',
        'Bobruisk',
        'Las Vegas',
        'Omsk',
        'Detroit',
        'El Qurayate',
        'Dampire',
        'Taupo',
        'Sukkure'
    ]
}

const progrLangs: { [key in SupportedLanguage]: string[] } = {
    ru: [
        'Go',
        'C#',
        'JavaScript',
        'Huskell',
        'Erlang',
        'Elm',
        'Rust',
        'Assembler',
        'C++',
        'Java',
        'Python',
        'Brainfuck',
        'Cobol',
        'Solidity',
        'Fortran'
    ],
    en: [
        'Go',
        'C#',
        'JavaScript',
        'Huskell',
        'Erlang',
        'Elm',
        'Rust',
        'Assembler',
        'C++',
        'Java',
        'Python',
        'Brainfuck',
        'Cobol',
        'Solidity',
        'Fortran'
    ]
}

function pickRandomItem(array: string[]): string {
    const i = Math.floor(Math.random() * array.length)
    return array[i]!
}

export function compileTemplate(template: string, ...args: string[]): string {
    // TODO: move to appropriate place (util?)

    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    const compiler = new Function('args', `return \`${template}\``)
    return String(compiler(args))
}

const defaultL10nContext = {
    content: {} as { [key: string]: string | string[] }, // ШТОЭТО? внеси ясность в этот странный тип
    language: 'en' as SupportedLanguage,
    supportedLanguages: [] as SupportedLanguage[],
    switchLanguage: (_: SupportedLanguage) => {},
    randomProgrLang: () => '' as string,
    randomCity: () => '' as string,
    randomLang: () => '' as string
}

const L10nContext = createContext(defaultL10nContext)

export function useL10nContext() {
    return useContext(L10nContext)
}

const defaultLang = 'en'

export function ProvideL10nContext({ children }: { children: ReactNode }) {
    const userLang =
        (storage.userLang as string) || navigator.language?.split('-')[0] || defaultLang

    const [language, setLanguage] = useState<SupportedLanguage>(
        (userLang in keysByLanguage ? userLang : defaultLang) as SupportedLanguage
    )

    const [content, setContent] = useState<{ [key: string]: string }>({
        ...keysByLanguage[language],
        ...documents[language]
    })

    const supportedLanguages = Object.keys(
        keysByLanguage as { [key in SupportedLanguage]: { [key: string]: string } }
    ) as SupportedLanguage[]

    // const [activeDocument, setActiveDocument] = useState<boolean>(false)

    const switchLanguage = useCallback((newLanguage: SupportedLanguage) => {
        setLanguage(newLanguage)
        setContent({
            ...(keysByLanguage[newLanguage] as { [key: string]: string }),
            ...(documents[newLanguage] as { [key: string]: string })
        })
        storage.userLang = newLanguage
    }, [])

    const context: typeof defaultL10nContext = {
        content,
        language,
        switchLanguage,
        supportedLanguages,
        randomProgrLang: useCallback(() => pickRandomItem(progrLangs[language]), [language]),
        randomLang: useCallback(() => pickRandomItem(langs[language]), [language]),
        randomCity: useCallback(() => pickRandomItem(cities[language]), [language])
    }

    return <L10nContext.Provider value={context}>{children}</L10nContext.Provider>
}
