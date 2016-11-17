import React from "react";
import { render } from "react-dom";

export class App extends React.Component {
    render() {
        return (
            <h1>This is from App.</h1>
        );
    }
}

render(<App/>, window.document.getElementById("app"));