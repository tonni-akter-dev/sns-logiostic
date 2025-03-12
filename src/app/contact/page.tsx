import React from 'react'
import ContactBanner from './component/ContactBanner'
import Contact from '../shared/Contact'
import GoogleMap from './component/GoogleMap'
import SubscribeForUpdates from './component/SubscribeForUpdates'

const ContactPage = () => {
    return (
        <div>
            <ContactBanner />
            <div className='my-[100px]'>
                <Contact />
            </div>
            <GoogleMap />
            <SubscribeForUpdates/>
        </div>
    )
}

export default ContactPage