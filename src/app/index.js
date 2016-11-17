// import React from "react";
// import { render } from "react-dom";
//
// import { Main } from "./components/Main";
// import { User } from "./components/User";
//
// export class App extends React.Component {
//
//     constructor() {
//         super();
//         this.state = {
//             username: "angelbein"
//         };
//     }
//
//     onChangeUsername(newName) {
//         this.setState({
//             username: newName
//         });
//     }
//
//     render() {
//         return (
//             <div className="container">
//                 <Main changeUsername={this.onChangeUsername.bind(this)} />
//                 <User username={this.state.username} />
//             </div>
//         );
//     }
// }
//
// render(<App/>, window.document.getElementById("app"));

import { createStore } from "redux";

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            state += action.payload;
            break;
        case "SUBTRACT":
            state -= action.payload;
            break;
    }
    return state;
};

const store = createStore(reducer, 1);

store.subscribe(() => {
    console.log("STORE Updated: ", store.getState());
});

store.dispatch({
    type: "ADD",
    payload: 80
});

store.dispatch({
    type: "ADD",
    payload: 100
});

store.dispatch({
    type: "SUBTRACT",
    payload: 10
});

