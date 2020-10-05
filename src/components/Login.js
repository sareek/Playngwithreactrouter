import React, { Component } from "react";

export default class Login extends Component {
  handleName = (e) => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="name"
          placeholder="enter typicode"
          onChange={this.handleName}
          value={this.state.username}
          style={{ background: "#4a5859" }}
        />
      </div>
    );
  }
}
