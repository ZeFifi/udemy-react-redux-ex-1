import React, { Component } from "react";

class UserOutput extends Component {
  render() {
    return (
      <div>
          <p>Bonjour je m'appelle {this.props.name}</p>
      </div>
    );
  }
}

export default UserOutput;
