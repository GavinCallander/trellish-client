import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Board } from './Board';
import { Dashboard } from './Dashboard';
import { Landing } from './Landing';
import { Team } from './Team';

import { Header } from './Layout';

import * as ROUTES from '../constants/routes';

export const Content = props => {
    return (
        <Router>
            <Header user={props.user} />
            <Route path={ROUTES.BOARD} render={() => 
                <Board 
                    user={props.user}
                />
            } />
            <Route path={ROUTES.DASHBOARD} render={() =>
                <Dashboard 
                    user={props.user}
                />
            } />
            <Route exact path={ROUTES.LANDING} render={() =>
                <Landing 
                    updateUser={props.updateUser}
                    user={props.user}
                />
            } /> 
        </Router>
    )
};