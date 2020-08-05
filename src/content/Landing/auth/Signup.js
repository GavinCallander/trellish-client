import React, { useEffect, useState } from 'react';

export const Signup = props => {

    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [message, setMessage] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    useEffect(() => {
        setMessage('');
    }, [email, firstname, lastname, password, passwordConfirm]);

    const handleSignup = e => {
        e.preventDefault();
        if (password === passwordConfirm) {
            fetch(`${process.env.REACT_APP_SERVER_URL}/auth/signup`, {
                method: 'POST',
                body: JSON.stringify({
                    email, 
                    firstname, 
                    lastname, 
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
                    props.updateUser(result.token)
                })
            })
            .catch(err => {
                setMessage(`${err.toString()}`)
            });
        }
        else {
            setMessage(`Passwords don't match. Please re-enter and try again.`);
        };
    };

    return (
        <div className='auth'>
            <p className='heading heading_one'>
                Sign up
            </p>
            <form className='auth auth_form' onSubmit={handleSignup}>
                <span className='auth_form_field'>
                    <p className='content content_one'>First Name:</p>
                    <input className='content content_one' onChange={e => setFirstname(e.target.value)} type='text' />
                </span>
                <span className='auth_form_field'>
                    <p className='content content_one'>Last Name:</p>
                    <input className='content content_one' onChange={e => setLastname(e.target.value)} type='text' />
                </span>
                <span className='auth_form_field'>
                    <p className='content content_one'>Email:</p>
                    <input className='content content_one' onChange={e => setEmail(e.target.value)} type='text' />
                </span>
                <span className='auth_form_field'>
                    <p className='content content_one'>Password:</p>
                    <input className='content content_one' onChange={e => setPassword(e.target.value)} type='password' />
                </span>
                <span className='auth_form_field'>
                    <p className='content content_one'>Confirm Password:</p>
                    <input className='content content_one' onChange={e => setPasswordConfirm(e.target.value)} type='password' />
                </span>
                <span className='auth_form_field_submit'>
                    <input className='content content_one auth_submit' type='submit' value='Sign Up' />
                </span>
                <span className='auth_form_field'>
                    <p className='content content_two'>{message}</p>
                </span>
            </form>
        </div>
    )
};