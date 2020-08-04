import React from 'react';

import { Signup } from './auth';

import { Footer } from '../Layout';

export const Landing = props => {
    return (
        <div className='page landing'>
            <div className='landing_main'>
                <div className='landing_section landing_section_left'>
                    <p className='heading heading_one'>
                        If it looks like Trello
                    </p>
                    <p className='heading heading_one'>
                        And it feels like Trello
                    </p>
                    <p className='heading heading_one'>
                        It's probably Trellish
                    </p>
                </div>
                <div className='landing_section'>
                    <Signup />
                    <p className='content content_one'>
                        Already have an account? <u className='auth_link'><b>Log in</b></u>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
};