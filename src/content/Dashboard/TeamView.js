import React from 'react';

import { BoardsDisplay } from './BoardsDisplay';

export const TeamView = props => {

    let myBoards = ['Front-end','Back-end','Styling'];
    let teamBoards = ['Meeting minutes','Bug log'];

    return (
        <div className='view'>
            <BoardsDisplay boards={myBoards} name={'Your Team Boards'} type={'Personal'} />
            <BoardsDisplay boards={teamBoards} name={'Team Boards'} type='' />
        </div>
    )
};