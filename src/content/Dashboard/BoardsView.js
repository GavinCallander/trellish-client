import React from 'react';

import { BoardsDisplay } from './BoardsDisplay';

export const BoardsView = props => {

    let personalBoards = ['trellish', 'something', 'another thing'];
    let teamBoards = [{
        name: 'Sew Strong',
        boards: ['Front end', 'Back end', 'Notes']
        }, {
        name: 'Team Supreme',
        boards: ['Front end', 'Back end', 'Something']
        }];

    let teamDisplays = teamBoards.map(team => {
        return <BoardsDisplay boards={team.boards} key={team.name} name={team.name} type='' />
    })

    return (
        <div className='view'>
            <BoardsDisplay boards={personalBoards} name={'Personal Boards'} type={'Personal'} />
            {teamDisplays}
        </div>
    )
};