import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

import { Content } from './content';

import './styles/main.scss';

const App = () => {

    const [user, setUser] = useState('');

    useEffect(() => {
        decodeToken();
    }, []);

    const updateUser = newToken => {
        if (newToken) {
            localStorage.setItem('mernToken', newToken);
            decodeToken(newToken);
        }
        else {
            setUser(null);
        };
    };
    const decodeToken = existingToken => {
        let token = existingToken || localStorage.getItem('mernToken');
        if (token) {
            let decoded = jwtDecode(token);
            if (!decoded || Date.now() >= decoded.exp * 1000) {
                setUser(null);
            }
            else {
                setUser(decoded);
            };
        }
        else {
            setUser(null);
        };
    };


    return (
        <div className='app'>
            <Content updateUser={updateUser} user={user} />
        </div>
    )
};

export default App;