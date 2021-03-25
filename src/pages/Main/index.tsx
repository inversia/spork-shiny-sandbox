import React from 'react'

import './index.scss'

function Bzzorp({ children }: { children: React.ReactNode }) {
    return (
        <div className="greeting">
            {children}
            <div>{children}</div>
            <div>{children}</div>
            <div>{children}</div>
        </div>
    )
}

export function Main() {
    return (
        <div className="page-main">
            <Bzzorp>BZZORP!</Bzzorp>
        </div>
    )
}
