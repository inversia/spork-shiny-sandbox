import React from 'react'
import ReactDom from 'react-dom'

import './fonts.css'
import './reset.css'
import './index.css'

import { Error404 } from './pages/Error404'

const Page404 = () => <Error404 />

ReactDom.render(<Page404 />, document.getElementById('root'))
