import React, {Component} from 'react';

class HeaderComponent extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="http://localhost:8080/api/" className="navbar-brand"> Employee Managment Book</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}
export default HeaderComponent;