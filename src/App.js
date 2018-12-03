import React, { Component } from "react";
import UserInput from "./components/UserInput/UserInput";
import UserOutput from "./components/UserOutput/UserOutput";

class App extends Component {
  state = {
    username: "Fifou"
  };

  changeUsernameHandler = username => {
    this.setState({
      username: username
    });
  };

  inputUpdateUsernameHandler = (event) => {
    this.setState({
      username : event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput usernameChange={this.inputUpdateUsernameHandler} />
        <UserOutput name="Yosra" />
        <UserOutput name="Philippe" />
        <UserOutput name="Maxime" />
        <UserOutput name="Thomas" />
        <UserOutput name={this.state.username} />
        <button
          onClick={() =>
            this.changeUsernameHandler("Best React developer ever")
          }
        >
          Change Fifou's username (state)
        </button>
      </div>
    );
  }
}

export default App;
