import React, { useState } from 'react';

export const NewBoardModal = props => {

    const [isprivate, setIsprivate] = useState(true);
    const [name, setName] = useState('');
    const [team, setTeam] = useState(props.teams[0]._id);

    const handleNewBoard = e => {
        e.preventDefault();
        let token = localStorage.getItem('mernToken');
        fetch(`${process.env.REACT_APP_SERVER_URL}/boards`, {
            method: 'POST',
            body: JSON.stringify({
                isprivate,
                name,
                team
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${token}`
            }
        })
        .then(res => {
            res.json()
            .then(result => {
                if (result.ok) {
                    props.setShowBoardModal(false);
                };
            })
            .catch(err => {
                console.log(err);
            })
        });
    };

    let teamSelectors = props.teams.map(team => {
        return <option key={team._id} value={team._id}>{team.name}</option>
    })

    return (
        <div className={props.currentClass}>
            <form className='board_modal_form' onSubmit={handleNewBoard}>
                <span className='board_modal_form_field'>
                    <input className='content content_one' onChange={e => setName(e.target.value)} placeholder='Add board title' type='text' />
                </span>
                <span className='board_modal_form_field'>
                    <select className='board_modal_select content content_one' onChange={e => setTeam(e.target.value)}>
                        {teamSelectors}
                        <option value='No team'>No team</option>
                    </select>
                </span>
                <span className='board_modal_form_field'>
                    <select className='content content_one' onChange={e => setIsprivate(e.target.value)}>
                        <option value='true'>Private</option>
                        <option value='false'>Public</option>
                    </select>
                </span>
                <span className='board_modal_form_field_submit'>
                    <input className='board_modal_submit content content_one' type='submit' value='Create new board' />
                    <button className='board_modal_submit board_modal_submit_cancel content content_one' onClick={() => props.setShowBoardModal(false)}>Cancel</button>
                </span>
            </form>
        </div>
    )
};