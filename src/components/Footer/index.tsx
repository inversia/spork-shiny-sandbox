import React from 'react'
import { icons } from '~/icons'
import './index.css'

export function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className="footer-info-wrapper">
                    <div className="footer-logo">
                        <img src={icons.gitjob_pure} alt="" />
                    </div>
                    <div className="footer-contacts">
                        <img src={icons.telegram} alt="Telegram" className="footer-logo" />
                        <img src={icons.twitter} alt="Twitter" className="footer-logo" />
                        <img src={icons.email} alt="Email" className="footer-logo" />
                    </div>
                    <div className="footer-info">
                        <a href="/user-agreement">User agreement</a>
                        <a href="/privacy">Privacy</a>
                        <a className="copyright" href="/">
                            {new Date().getFullYear() + ' GitJob'}
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
