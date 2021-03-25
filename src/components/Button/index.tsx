import React, { useCallback } from 'react'
import Ripple from 'react-material-ripple'

import './index.scss'
import { icons } from '~/icons'

export const ButtonIcon = ({ mask }: { mask: string }) => (
    <span className="icon">
        <img src={icons.square} alt="" title="" />
        <i style={{ maskImage: mask, WebkitMaskImage: mask }}></i>
    </span>
)

export const Button = ({
    children = null as React.ReactNode | Array<React.ReactNode>,
    onClick = (_: React.MouseEvent) => {},
    icon = '',
    inverted = false,
    disabled = false,
    href = '',
    className = '',
    id = undefined,
    ...props
}) => {
    className += ' button'
    if (disabled) className += ' disabled'
    else className += ' click-animation'
    if (inverted) className += ' inverted'

    const onClickCallback = useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault()
            return onClick(e)
        },
        [onClick]
    )

    const ButtonContent = (
        <a
            id={id || undefined}
            href={href || '#'}
            onClick={href ? undefined : onClickCallback}
            {...props}
        >
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
