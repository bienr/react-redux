import React from "react";
import { render } from "react-dom";

export class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            newUsername: "verseeker"
        };
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The Main Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <button
                            onClick={() => this.props.changeUsername(this.state.newUsername)}
                            className="btn btn-primary">Change Username</button>
                    </div>
                </div>
            </div>
        );
    }
}

Main.PropTypes = {
    changeUsername: React.PropTypes.func
};