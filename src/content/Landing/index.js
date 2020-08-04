import React from 'react';

import { Signup } from './auth';

import { Footer } from '../Layout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrello } from '@fortawesome/free-brands-svg-icons'

export const Landing = props => {
    return (
        <div className='page landing'>
            <div className='landing_main'>
                <div className='landing_section landing_section_left'>
                    <div className='landing_logo'>
                        <FontAwesomeIcon icon={faTrello} size='5x' />
                        <p className='logo'>Trellish</p>
                    </div>
                    <div className='landing_section_tag'>
                        <p className='heading heading_one'>
                            If it looks like Trello
                        </p>
                        <p className='heading heading_one'>
                            But it ain't Trello
                        </p>
                        <p className='heading heading_one'>
                            It's probably Trellish
                        </p>
                    </div>
                </div>
                <div className='landing_section'>
                    <Signup />
                    <p className='content content_one'>
                        Already have an account? <u className='auth_link'>Log in</u>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
};