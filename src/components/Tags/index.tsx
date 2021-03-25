import React from 'react'
import './index.scss'

export function Tags({ items }: { items: string[] }) {
    return (
        <div className="tags-wrapper">
            {items.map((x, i) => (
                <dt key={i}>{x}</dt>
            ))}
        </div>
    )
}
