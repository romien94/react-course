import React from "react";

import Header from '../Header/Header';

import Map from '../Map/Map';
import Profile from '../Profile/Profile'
import LoginForm from '../LoginForm/LoginForm';

const PAGES = {
    map: <Map/>,
    profile: <Profile/>,
}

class Main extends React.Component{
    state = {activePage: 'map'};

    render () {
        return (
            <div className="app-inner">
                <Header/>
                {PAGES[this.state.activePage]}
            </div>
        );
    }

}

export default Main;