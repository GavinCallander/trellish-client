import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';

import { BoardPreview } from './BoardPreview';

export const BoardsDisplay = props => {

    let headerContent = props.type === 'Personal' ? 
        <>
        <FontAwesomeIcon className='display_icon' icon={faUser} size='1x' /><p className='heading heading_two'>{props.name}</p>
        </>:
        <>
        <FontAwesomeIcon className='display_icon' icon={faUserFriends} size='1x' /><p className='heading heading_two'>{props.name}</p>
        </>

    let bodyContent = props.boards.map(board => {
        return <BoardPreview key={board} name={board}/>
    })

    return (
        <div className='display'>
            <div className='display display_header'>
                {headerContent}
            </div>
            <div className='display display_boards'>
                {bodyContent}
                <BoardPreview name={'Create new board'} type={'new'}/>
            </div>
        </div>
    )
};