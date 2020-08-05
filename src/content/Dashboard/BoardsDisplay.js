import React, { useEffect } from 'react';

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

    let bodyContent;
    if (props.boards) {
        console.log(props.boards)
        bodyContent = props.boards.map((board, i) => {
            return <BoardPreview key={i} name={board.name}/>
        })
    }
    else {
        console.log('loading');
    };

    return (
        <div className='display'>
            <div className='display display_header'>
                {headerContent}
            </div>
            <div className='display display_boards'>
                {bodyContent}
                <BoardPreview name={'Create new board'} showBoardModal={props.setShowBoardModal} type={'new'}/>
            </div>
        </div>
    )
};