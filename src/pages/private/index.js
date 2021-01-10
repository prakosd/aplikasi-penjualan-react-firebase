import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Setting from './pengaturan';

function Private() {
    return (
        <Switch>
            <Route path="/setting" component={Setting} />
        </Switch>
    );
}

export default Private;