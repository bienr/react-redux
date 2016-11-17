import React from "react";
import { render } from "react-dom";

export class User extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h2>The User Page</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <p>Username: {this.props.username}</p>
                    </div>
                </div>
            </div>
        );
    }
}

User.PropTypes = {
    username: React.PropTypes.string
};