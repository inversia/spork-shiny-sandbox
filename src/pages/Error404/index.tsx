import React from 'react'
import { useHistory } from 'react-router-dom'

import './index.css'
import { Button } from '~components'
import Error404Image from './error404.svgr'

export function Error404() {
    const history = useHistory()
    return (
        <div className="error-container">
            <div className="error-wrapper">
                <div className="error-message">
                    <h1>404</h1>
                    <p>Ничего не найдено =(</p>
                    <Button className="go-home-button" onClick={() => history.push('/')}>
                        Вернуться
                    </Button>
                </div>
                <div className="error-illustration">
                    <Error404Image />
                </div>
            </div>
        </div>
    )
}
