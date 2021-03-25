import React from 'react'
import './index.css'

import classnames from 'classnames'

export const Checkbox = ({
    label = '',
    checked = false,
    className = undefined as string | undefined,
    onClick = (_: React.ChangeEvent<HTMLInputElement>) => {}
}) => {
    return (
        <label className={classnames('checkbox', className)}>
            <input type="checkbox" onChange={onClick} checked={checked} />
            {label && <span>{label}</span>}
        </label>
    )
}
