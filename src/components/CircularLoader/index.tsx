import React from 'react'
import './index.css'
import classnames from 'classnames'

export function CircularLoader({ className = undefined as string | undefined } = {}) {
    return (
        <svg
            className={classnames('circular-loader', className)}
            viewBox="25 25 50 50"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="gradient">
                    <stop offset="1%" stopColor="#60ceae" />
                    <stop offset="99%" stopColor="#ffc107" />
                </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="20"></circle>
        </svg>
    )
}
