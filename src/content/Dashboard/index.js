import React, { useState } from 'react';

import { BoardsView } from './BoardsView';
import { TeamView } from './TeamView';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';

export const Dashboard = props => {

    const [activeDisplay, setActiveDisplay] = useState('Boards')
    const [menuItems, setMenuItems] = useState(['Boards']);
    const [teams, setTeams] = useState(['Sew Strong', 'Team Supreme']);

    const handleDisplayToggle = e => {
        setActiveDisplay(e.currentTarget.getAttribute('name'));
    }

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
    let teamTabs = teams.map(team => {
        let currentClass ='dashboard_menu_item'
        if (team === activeDisplay) {
            currentClass += ' dashboard_menu_item_active'
        };
        return (
            <span className={currentClass} key={team} name={team} onClick={handleDisplayToggle}>
                <FontAwesomeIcon className='dashboard_menu_item_icon' icon={faUserFriends} size='1x'/><b><p className='content content_two'>{team}</p></b>
            </span>
        )
    });

    return (
        <div className='page'>
            <div className='dashboard dashboard_menu'>
                {menuTabs}
                <span className='dashboard_menu_heading'>
                    <p className='content content_two'>TEAMS</p>
                </span>
                {teamTabs}
            </div>
            <div className='dashboard dashboard_content'>
                <BoardsView />
                {/* <TeamView /> */}
            </div>
        </div>
    )
};