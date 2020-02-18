import React from "react";
import ReactDOM from "react-dom";
import UserProfile from "./component/userProfile";

class Index extends React.Component {

    render () {
        return (
            <UserProfile/>
        );
    }

}

ReactDOM.render(<Index />, document.getElementById("reactElement"));