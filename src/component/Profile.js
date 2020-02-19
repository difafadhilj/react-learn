import React from "react";

class Profile extends React.Component {
  render() {
    const { params } = this.props.match;
    return (
      <div>
        <div>Profile {params.id}</div>
      </div>
    );
  }
}

export default Profile;
