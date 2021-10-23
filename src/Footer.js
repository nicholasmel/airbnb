import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__bottom'>
                <div className='footer__info'>
                    <h1>ABOUT</h1>
                    <p>How Airbnb Works</p>
                    <p>Newsroom</p>
                    <p>Airbnb 2021</p>
                    <p>Investors</p>
                    <p>Airbnb Plus</p>
                    <p>Airbnb Luxe</p>
                    <p>HotelTonight</p>
                    <p>Airbnb for Work</p>
                    <p>Made possible by Hosts</p>
                    <p>Careers</p>
                    <p>Foundation's Letter</p>
                </div>
                <div className='footer__info'>
                    <h1>COMMUNITY</h1>
                    <p>Diveresity & Belonging</p>
                    <p>Against Discrimination</p>
                    <p>Accessiblity</p>
                    <p>Airbnb Associates</p>
                    <p>Host Afghan refugees</p>
                    <p>Guest Referrals</p>
                    <p>Gift cards</p>
                    <p>Airbnb.org</p>
                </div>
                <div className='footer__info'>
                    <h1>HOST</h1>
                    <p>Host your home</p>
                    <p>Host an Online Experience</p>
                    <p>Host an Experience</p>
                    <p>Responsible hosting</p>
                    <p>Resource Center</p>
                    <p>Community Center</p>
                </div>
                <div className='footer__info'>
                    <h1>SUPPORT</h1>
                    <p>Our COVID-19 Response</p>
                    <p>Help Center</p>
                    <p>Cancellation options</p>
                    <p>Neighborhood Support</p>
                    <p>True & Safety</p>
                </div>
            </div>
            <div className='footer__copyright'>
                <p>© 2021 Airbnb clone! No rights reserved - this is a demo!</p>
                <p>Privacy · Terms · Sitemap · Company Details</p>
            </div>
        </div>
    )
}

export default Footer
