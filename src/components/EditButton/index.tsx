import React, { useCallback } from 'react'
import Ripple from 'react-material-ripple'
import { icons } from '~/icons'
import { ButtonIcon } from '~components/Button'
import './index.css'

export function Button({
    children = null as React.ReactNode | Array<React.ReactNode>,
    onClick = (_: React.MouseEvent) => {},
    icon = '',
    // inverted = false,
    disabled = false,
    href = '',
    className = ''
}) {
    className += ' button'
    className += ' click-animation'
    // if (disabled) className += ' disabled'
    // else          className += ' click-animation'
    // if (inverted) className += ' inverted'

    const onClickCallback = useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault()
            return onClick(e)
        },
        [onClick]
    )

    const ButtonContent = (
        <a href={href || '#'} onClick={href ? undefined : onClickCallback}>
            {icon in icons ? <ButtonIcon mask={`url(${icons[icon]!})`} /> : null}
            <span className="title">{children}</span>
        </a>
    )

    return disabled ? (
        <div className={className}>{ButtonContent}</div>
    ) : (
        <Ripple className={className}>{ButtonContent}</Ripple>
    )
}
