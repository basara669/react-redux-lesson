import React, { Component } from "react";

class App extends Component {
  render() {
    // const greeting = "Hi,Tom";
    // const dom = <h1 className="foo">{greeting}</h1>;
    // return dom;
    return (
      <div>
        <label htmlFor="bar">bar</label>
        <input
          type="text"
          onClick={() => {
            console.log("I am clicked");
          }}
        />
      </div>
    );
  }
}

export default App;
