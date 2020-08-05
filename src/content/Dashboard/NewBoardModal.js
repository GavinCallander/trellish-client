import React, { useEffect, useState } from 'react';

export const NewBoardModal = props => {

    const [isprivate, setIsprivate] = useState(true);
    const [name, setName] = useState('');
    const [team, setTeam] = useState('');

    return (
        <div className={props.currentClass}>
            <form className='board_modal_form'>
                <span className='board_modal_form_field'>
                    <input className='content content_one' placeholder='Add board title' type='text' />
                </span>
                <span className='board_modal_form_field'>
                    <select className='board_modal_select content content_one'>
                        <option value=''>hello</option>
                        <option>world</option>
                    </select>
                </span>
                <span className='board_modal_form_field'>
                    <select className='content content_one'>
                        <option>You</option>
                        <option>Slag</option>
                    </select>
                </span>
                <span className='board_modal_form_field_submit'>
                    <input className='board_modal_submit content content_one' type='submit' value='Create new board' />
                    <button className='board_modal_submit board_modal_submit_cancel content content_one'>Cancel</button>
                </span>
            </form>
        </div>
    )
};