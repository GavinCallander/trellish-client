import React, { useEffect, useState } from 'react';

export const Signup = props => {
    return (
        <div className='auth'>
            <p className='heading heading_one'>
                Sign up
            </p>
            <form className='auth auth_form'>
                <span className='auth_form_field'>
                    <p className='content content_one'>First Name:</p>
                    <input type='text' />
                </span>
                <span className='auth_form_field'>
                    <p className='content content_one'>Last Name:</p>
                    <input type='text' />
                </span>
                <span className='auth_form_field'>
                    <p className='content content_one'>Email:</p>
                    <input type='text' />
                </span>
                <span className='auth_form_field'>
                    <p className='content content_one'>Password:</p>
                    <input type='password' />
                </span>
                <span className='auth_form_field'>
                    <p className='conten content_one'>Confirm Password:</p>
                    <input type='password' />
                </span>
                <span className='auth_form_field_submit'>
                    <input className='content content_one auth_submit' type='submit' value='Sign Up' />
                </span>
            </form>
        </div>
    )
};