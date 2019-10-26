import React from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from './Home';
import Beginner from '../../components/Trails/Beginner';
import BeginnerIntermediate from '../../components/Trails/BeginnerIntermediate';
import Intermediate from '../../components/Trails/Intermediate';
import IntermediateAdvanced from '../../components/Trails/IntermediateAdvanced';
import Advanced from '../../components/Trails/Advanced';
import AdvancedExpert from '../../components/Trails/AdvancedExpert';
import Expert from '../../components/Trails/Expert';
import MyFavorites from '../../components/Trails/MyFavorites';


const Sidebar = () => {
    return(
    <div className="sidebar">
        <div className="sidebar-list-styling">
            <ul className="sidebar-list list-unstyled">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/beginner">Beginner Trails</Link></li>
                <li><Link to="/beginnerIntermediate">Beginner/Intermediate Trails</Link></li>
                <li><Link to="/intermediate">Intermediate Trails</Link></li>
                <li><Link to="/intermediateAdvanced">Intermediate/Advanced Trails</Link></li>
                <li><Link to="/advanced">Advanced Trails</Link></li>
                <li><Link to="/advancedExpert">Advanced/Expert Trails</Link></li>
                <li><Link to="/expert">Expert Trails</Link></li>
                <li><Link to="/myFavorites">My Favorites</Link></li>
            </ul>
        </div>
        <div className="sidebar-route">
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/beginner"><Beginner /></Route>
                <Route exact path="/beginnerIntermediate"><BeginnerIntermediate /></Route>
                <Route exact path="/intermediate"><Intermediate /></Route>
                <Route exact path="/intermediateAdvanced"><IntermediateAdvanced /></Route>
                <Route exact path="/advanced"><Advanced /></Route>
                <Route exact path="/advancedExpert"><AdvancedExpert /></Route>
                <Route exact path="/expert"><Expert /></Route>
                <Route exact path="/myFavorites"><MyFavorites /></Route>
            </Switch>
        </div>
    </div>
    )
}

export default Sidebar;