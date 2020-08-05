import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { Login, Signup } from './auth';

import { Footer } from '../Layout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrello } from '@fortawesome/free-brands-svg-icons';

import * as ROUTES from '../../constants/routes';

export const Landing = props => {

    const [showLogin, setShowLogin] = useState(false);

    let currentClass = showLogin ? 'auth auth_modal' : 'auth_hidden';

    if (props.user) {
        return <Redirect to={ROUTES.DASHBOARD} />
    };

    return (
        <div className='page landing'>
            <div className='landing_main'>
                <Login currentClass={currentClass} setShowLogin={setShowLogin} updateUser={props.updateUser} />
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
                    <Signup updateUser={props.updateUser} />
                    <p className='content content_one'>
                        Already have an account? <u className='auth_link' onClick={() => setShowLogin(true)}>Log in</u>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
};