import React, { useEffect, useState } from 'react';

export const Login = props => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        setMessage('')
    }, [email, password]);

    const handleLogin = e => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) {
                setMessage(`${res.status}: ${res.statusText}`);
                return;
            }
            res.json()
            .then(result => {
                props.updateUser(result.token);
            })
            .catch(err => {
                setMessage(`${err.toString()}`);
            });
        });
    };

    return (
        <div className={props.currentClass}>
            <p className='heading heading_one'>
                Log in
            </p>
            <form className='auth auth_form' onSubmit={handleLogin}>
                <span className='auth_form_field'>
                    <p className='content content_one'>Email:</p>
                    <input className='content content_one' onChange={e => setEmail(e.target.value)} type='text' />
                </span>
                <span className='auth_form_field'>
                    <p className='content content_one'>Password:</p>
                    <input className='content content_one' onChange={e => setPassword(e.target.value)} type='password' />
                </span>
                <span className='auth_form_field_submit'>
                    <input className='content content_one auth_submit' type='submit' value='Log in' />
                </span>
                <span className='auth_form_field'>
                    <p className='content content_two'>{message}</p>
                </span>
            </form>
            <p className='content content_two'>
                Don't have an account yet? <u className='auth_link' onClick={() => props.setShowLogin(false)}>Sign up</u>
            </p>
        </div>
    )
};