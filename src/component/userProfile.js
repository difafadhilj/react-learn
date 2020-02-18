import React from "react";
import "./Style.css";
import img from "../img/avatar.png";
// import ReactDOM from "react-dom";

class Avatar extends React.Component {
    render () {
        return (
            <div id="avatar">
                <img src={img} alt="Me" />
            </div>
        );
    }
}

class UserName extends React.Component {
    constructor (props) {
        super(props);
        this.state = {name: "Default"};
    }
    
    render () {
        return (
            <div id="userName">
                <p>Username : {this.props.name}</p>
            </div>
        );
    }
    
}

UserName.defaultProps = {
    name: "User"
};

class Bio extends React.Component {
    render () {
        return (
            <div id="bio">
                <p>My name is Difa. I'm a passionate software engineer. I want to be a professional software engineer.</p>
            </div>
        );
    }
}

class UserProfile extends React.Component {
    
    render () {
        return (
            <div id="container">
                <h1>Welcome to User Profile Page</h1>
                <div id="card">
                    <Avatar/>
                    <UserName name="dfjknight"/>
                    <Bio/>
                </div>
            </div>
        );
    }

}

export default UserProfile;