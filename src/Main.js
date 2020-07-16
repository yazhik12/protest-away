import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../src/pages/Home';
import Connect from '../src/pages/Connect';
import Action from '../src/pages/TakeAction';
import Report from '../src/pages/ReportAnIncident';
import Explore from '../src/pages/Explore';

const Main = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/connect' component={Connect}></Route>
            <Route exact path='/action' component={Action}></Route>
            <Route exact path='/report' component={Report}></Route>
            <Route exact path='/explore' component={Explore}></Route>
        </Switch>
    );
}

export default Main;