import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { BoardsView } from './BoardsView';
import { NewBoardModal } from './NewBoardModal';
import { TeamView } from './TeamView';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';

import * as ROUTES from '../../constants/routes';

export const Dashboard = props => {

    const [activeDisplay, setActiveDisplay] = useState('Boards')
    const [menuItems, setMenuItems] = useState(['Boards']);
    const [personalBoards, setPersonalBoards] = useState([]);
    const [showBoardModal, setShowBoardModal] = useState(false);
    const [teams, setTeams] = useState([]);
    
    useEffect(() => {
        setPersonalBoards(props.user.boards);
        setTeams(props.user.teams);
    }, []);

    const handleDisplayToggle = e => {
        setActiveDisplay(e.currentTarget.getAttribute('name'));
    }

    let currentBoardModalClass = showBoardModal ? 'board_modal': 'board_modal_hidden';
    let menuTabs = menuItems.map(item => {
        let currentClass = 'dashboard_menu_item'
        if (item === activeDisplay) {
            currentClass += ' dashboard_menu_item_active'
        };
        return (
            <span className={currentClass} key={item} name={item} onClick={handleDisplayToggle}>
                <FontAwesomeIcon className='dashboard_menu_item_icon' icon={faTrello} size='1x'/><b><p className='content content_two'>{item}</p></b>
            </span>
        )
    });
    let teamTabs = teams.map((team, i) => {
        let currentClass ='dashboard_menu_item'
        if (team.name === activeDisplay) {
            currentClass += ' dashboard_menu_item_active'
        };
        return (
            <span className={currentClass} key={i} name={team.name} onClick={handleDisplayToggle}>
                <FontAwesomeIcon className='dashboard_menu_item_icon' icon={faUserFriends} size='1x'/><b><p className='content content_two'>{team.name}</p></b>
            </span>
        )
    });

    if (!props.user) {
        return <Redirect to={ROUTES.LANDING} />
    };

    return (
        <div className='page'>
            <NewBoardModal currentClass={currentBoardModalClass} />
            <div className='dashboard dashboard_menu'>
                {menuTabs}
                <span className='dashboard_menu_heading'>
                    <p className='content content_two'>TEAMS</p>
                </span>
                {teamTabs}
            </div>
            <div className='dashboard dashboard_content'>
                <BoardsView boards={personalBoards} setShowBoardModal={setShowBoardModal} teams={teams} />
                {/* <TeamView /> */}
            </div>
        </div>
    )
};