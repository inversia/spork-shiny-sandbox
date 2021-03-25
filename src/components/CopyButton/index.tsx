import React from 'react'

import './index.scss'

// (email: string) => void
async function copyToClipboard(email: string) {
    try {
        await navigator.clipboard.writeText(email)
    } catch (error) {
        console.error(error + 'copy failed!')
    }
}

export function CopyButton({ target, maskColor }: { target: string; maskColor: string }) {
    return (
        <div
            className="copy-button"
            style={{ backgroundColor: `${maskColor}` }}
            onClick={() => copyToClipboard(target)}
        ></div>
    )
}
