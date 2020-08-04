import React from 'react';

export const BoardPreview = props => {

    // let type = props.type === 'new' ? 'heading'
    let propsClass = props.type === 'new' ? 'preview_board preview_board_new' : 'preview_board'
    let propsClassText = props.type === 'new' ? 'content content_two' : 'heading heading_two'

    return (
        <div className={propsClass}>
            <p className={propsClassText}>{props.name}</p>
        </div>
    )
};