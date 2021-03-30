import React, { Component } from "react";
import CompanyDetails from "./CompanyDetails";
import Home from "./HomeComponent";
import { Switch, Route, withRouter } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Switch>
                <Home/>
                <Route path = '/job/:id' component={CompanyDetails} />
            </Switch>
        );
    }
}


export default withRouter(Main);