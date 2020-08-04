import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrello } from '@fortawesome/free-brands-svg-icons';

export const Header = props => {
    return (
        <div className='layout header'>
            <FontAwesomeIcon className='header_icon' icon={faTrello} size='2x' /><p className='brand brand_one header_text'>Trellish</p>
        </div>
    )
};