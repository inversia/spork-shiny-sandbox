import React from 'react'
import './index.css'

export function RadioButton({
    label = '',
    checked = false,
    onClick = (_: React.ChangeEvent<HTMLInputElement>) => {}
}) {
    return (
        <label className="radio-button">
            <input type="radio" onChange={onClick} checked={checked} />
            {label && <span>{label}</span>}
        </label>
    )
}
