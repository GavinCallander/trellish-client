import React from 'react';

export const BoardPreview = props => {

    let propsClass = props.type === 'new' ? 'preview_board preview_board_new' : 'preview_board'
    let propsClassText = props.type === 'new' ? 'content content_two' : 'heading heading_two'

    return (
        <div className={propsClass} onClick={() => props.showBoardModal(true)}>
            <p className={propsClassText}>{props.name}</p>
        </div>
    )
};