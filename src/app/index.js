import React from "react";
import { render } from "react-dom";

import { Main } from "./components/Main";
import { User } from "./components/User";

export class App extends React.Component {

    constructor() {
        super();
        this.state = {
            username: "angelbein"
        };
    }

    onChangeUsername(newName) {
        this.setState({
            username: newName
        });
    }

    render() {
        return (
            <div className="container">
                <Main changeUsername={this.onChangeUsername.bind(this)} />
                <User username={this.state.username} />
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));