import React, { Component } from "react";
import UserInput from "./components/UserInput/UserInput";
import UserOutput from "./components/UserOutput/UserOutput";

class App extends Component {
  state = {
    name: "Philippe"
  };
  render() {
    return (
      <div className="App">
        <UserInput />
        <UserOutput name="Fifou" />
        <UserOutput name="Philippe" />
        <UserOutput name="Maxime" />
        <UserOutput name="Thomas" />
      </div>
    );
  }
}

export default App;
