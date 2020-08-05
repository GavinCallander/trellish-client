import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';

export const Header = props => {

    let headerClass, headerNav, headerUtils;
    
    if (props.user) {
        headerClass = 'layout header header_authenticated'
        headerNav = 
            <span className='header_aside'>
                <FontAwesomeIcon className='header_icon_link heading heading_one' icon={faHome} size='1x' />
            </span>
        headerUtils =
            <span className='header_aside header_aside_right'>
                <FontAwesomeIcon className='header_icon_link heading heading_one' icon={faPlus} size='1x' />
                <FontAwesomeIcon className='header_icon_link heading heading_one' icon={faUser} size='1x' />
            </span>
    }
    else {
        headerClass = 'layout header'
    }

    return (
        <div className={headerClass}>
            {headerNav}
            <span className='header_main'>
                <FontAwesomeIcon className='header_icon' icon={faTrello} size='2x' /><p className='brand brand_one header_text'>Trellish</p>
            </span>
            {headerUtils}
        </div>
    )
};