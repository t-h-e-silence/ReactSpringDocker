import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import Panel from "./components/Panel";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";

function App() {
    return (
        <div>
            <Router>
                <div className="container">
                    <HeaderComponent/>
                    <div className="container">
                        <Switch>
                            <Route path = "/" exact component={ListEmployeeComponent}></Route>
                            <Route path = "/employees" component={ListEmployeeComponent}></Route>
                            <Route path = "/add" component={CreateEmployeeComponent}></Route>
                            <Route path = "/update/:id" component={UpdateEmployeeComponent}></Route>

                        </Switch>
                    </div>
                    <Panel/>
                    <FooterComponent/>
                </div>
            </Router>
        </div>
    );
}

export default App;
