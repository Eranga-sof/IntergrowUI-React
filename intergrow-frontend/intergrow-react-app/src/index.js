import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "mdbreact/dist/css/mdb.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RegisterUser from './component/account/register-user';
import App from './component/App';
import Footer from './component/core/footer';
import Header from './component/core/header';
import Home from './component/core/home';
import EmployeeView from './component/employee/employee';
import EmployeeList from './component/employee/employeeList';
import goals from './component/goals/goals';
import Viewhelp from './component/helps/viewhelp';
import NotFoundPage from './component/notfoundpage/404notfound';
import ViewTeam from './component/Team/team';
import './css/index.css';
import GoalProgress from "./component/goals/goal_progress_page";
import TeamDetails from "./component/Team/teamDetails";


const routing = (
    <BrowserRouter>
        <div  className="mt-5 pt-3">
            <Switch>
                <Route exact path ='/home' component = {Home}/>
                <Route exact path="/" component={App} />
                <Route path ='/employee' component = {EmployeeView}/>
                <Route path ='/employeelist' component = {EmployeeList}/>
                <Route path ='/goals' component = {goals}/>
                <Route path = '/help' component = {Viewhelp}/>
                <Route path = '/team' component = {ViewTeam}/>
                <Route path = '/register' component = {RegisterUser}/>
                <Route path = '/goal/:id' component = {GoalProgress}/>
                <Route path = '/team/:id' component = {TeamDetails}/>
                <Route component = {NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
)
ReactDOM.render(routing, document.getElementById('root'));
ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(<Footer/>, document.getElementById('footer'));
