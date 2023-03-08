import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import history from './history';

import Selection from './components/Selection';
import Upload from './components/Upload';
import Login from './components/Login';
import TheExchange from './components/SwapExchange/SwapExchange';
import StoryBooth from './components/StoryBooth';
import App from "./components/App";
import { UserContext } from './utils/UserContext'



export default function Routes() {
    const [user, setUser] = useState(undefined)
    return (
        <BrowserRouter history={history}>
            <UserContext.Provider value={{user, setUser}}>
            <Switch>
                <Route path="/selection" exact component={Selection} />
                <Route path="/App" exact component={App} />
                <Route path="/Upload" exact component={Upload} />
                <Route path="/Login" exact component={Login} />
                <Route path="/TheExchange" exact component={TheExchange} />
                <Route path="/StoryBooth" exact component={StoryBooth} />
                

            </Switch>
            </UserContext.Provider>
        </BrowserRouter>
    )

}
