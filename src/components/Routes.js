import React from "react";
import {
    Route,
    Switch
} from "react-router-dom";

import Dashboard from '../pages/Dashboard';
import Chart from '../pages/Chart';
import Form from '../pages/Form';
import Email from '../pages/Email';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
//This can be a const.  It does not need a state
function Routes() {
    return(
        <section>
            <Switch>
                <Route exact path={'/'} component={Dashboard} />
                <Route exact path={'/Dashboard'} component={Dashboard} />
                <Route exact path={'/Chart'} component={Chart} />
                <Route exact path={'/Form'} component={Form} />
                <Route exact path={'/Email'} component={Email} />
                <Route exact path={'/Profile'} component={Profile} />
                <Route exact path={'/Settings'} component={Settings} />
            </Switch>
        </section>
    )
}
export default Routes;