import React from 'react';

import { BoardsDisplay } from './BoardsDisplay';

export const BoardsView = props => {

    let teamDisplays;
    // let teamDisplays;
    if (props.teams) {
        teamDisplays = props.teams.map((team, i) => {
            return <BoardsDisplay boards={team.boards} key={i} name={team.name} />
        });
    };

    return (
        <div className='view'>
            <BoardsDisplay boards={props.boards} name={'Personal Boards'} setShowBoardModal={props.setShowBoardModal} type={'Personal'} />
            {teamDisplays}
        </div>
    )
};