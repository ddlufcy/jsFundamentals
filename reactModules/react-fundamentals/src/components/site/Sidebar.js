import React from 'react'
import {
    Route,
    Link,
    Switch
} from 'react-router-dom'
import Home from './Home'
import Resources from './Resources'
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo'
import PracticeComponent from '../concepts/PracticeComponent'
import JSXRules from '../concepts/JSXRules'
import State from '../concepts/UseState'

const Sidebar = () => (
    <div className="sidebar">
        <div className="sidebar-list-styling">
            <ul className="sidebar-list list-unstyled">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/functionalcomponent">Functional Component</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/practice">Practice</Link></li>
                <li><Link to="/jsxrules">JSX Rules</Link></li>
                <li><Link to="/state">useState</Link></li>
            </ul>
        </div>
            <div className="sidebar-route">
                <Switch>
                    <Route exact path="/Home"><Home /></Route>
                    <Route exact path="/Resources"><Resources /></Route>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/functionalcomponent"><FunctionalComponentDemo /></Route>
                    <Route exact path="/practice"><PracticeComponent /></Route>
                    <Route exact path="/jsxrules"><JSXRules /></Route>
                    <Route exact path="/state"><State /></Route>
                </Switch>
            </div>
    </div>
)

export default Sidebar;