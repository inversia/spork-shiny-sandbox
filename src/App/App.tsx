import 'panic-overlay' // TODO: disable in production (conditional import?)
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Error404 } from '~pages/Error404'
import { Main } from '~pages/Main'

import { hi } from '~/hello'

import './App.scss'

hi(console.info)

export const App = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    )
}

function AppContent() {
    return (
        <>
            <div className="page">
                <Switch>
                    <Route path="/" exact component={Main} />

                    <Route path="*">
                        <Error404 />
                    </Route>
                </Switch>
            </div>
        </>
    )
}
