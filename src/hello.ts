/* eslint-disable */

const hiText = `
  ██████  ██▓███   ▒█████   ██▀███   ██ ▄█▀
▒██    ▒ ▓██░  ██▒▒██▒  ██▒▓██ ▒ ██▒ ██▄█▒ 
░ ▓██▄   ▓██░ ██▓▒▒██░  ██▒▓██ ░▄█ ▒▓███▄░ 
  ▒   ██▒▒██▄█▓▒ ▒▒██   ██░▒██▀▀█▄  ▓██ █▄ 
▒██████▒▒▒██▒ ░  ░░ ████▓▒░░██▓ ▒██▒▒██▒ █▄
▒ ▒▓▒ ▒ ░▒▓▒░ ░  ░░ ▒░▒░▒░ ░ ▒▓ ░▒▓░▒ ▒▒ ▓▒
░ ░▒  ░ ░░▒ ░       ░ ▒ ▒░   ░▒ ░ ▒░░ ░▒ ▒░
░  ░  ░  ░░       ░ ░ ░ ▒    ░░   ░ ░ ░░ ░ 
      ░               ░ ░     ░     ░  ░   
                                           
`
const c = console
const n = '\n'
const size = () => hiText.split(n)[1]?.length || 0
const cTitle = (text: string, l = '==[', r = ']==', sp = '-') => {
    const p = Math.ceil((size() - text.length - l.length - r.length) / 2)
    return `${sp.repeat(p)}${l}${text}${r}${sp.repeat(p)}`
}

const body = [
    'Description',
    ['Searching developers tool for your', 'open-source projects at github'].map(t =>
        cTitle(t, '', '', ' ')
    ),
    'Our Team',
    [
        'Sam Becket',
        'ChronosX88',
        'Vlad Ulianov',
        'Mikhail',
        'ASPIRIN++',
        'inversia',
        'tankakatan'
    ].map(u => `-- ${u}`),
    'Open Source',
    ['See: https://github.com/SporkHubr/']
]

// Render
export const hi = (r: typeof console.log) =>
    r(hiText, n, body.map(a => (Array.isArray(a) ? a.join(n) : `${n}${cTitle(a)}`)).join(n))
