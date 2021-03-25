/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import langsJson from '~/languages.json'

export type Lang = {
    type: string // "programming",
    tm_scope: string // "source.js",
    ace_mode: string // "javascript",
    codemirror_mode: string // "javascript",
    codemirror_mime_type: string // "text/javascript",
    color: string // "#f1e05a",
    aliases: string[] // ["js", "node"],
    extensions: string[] // [ .js", "._js", ".bones", ".cjs", ".es", ".es6", ".frag", ".gs", ".jake", ".jsb", ...]
    filenames: string[] // ["Jakefile"],
    interpreters: string[] // ["chakra", "d8", "gjs", "js", "node", "qjs", "rhino", "v8", "v8-shell"],
    language_id: number // 183
}

export const langs: { [key: string]: Lang } = langsJson
