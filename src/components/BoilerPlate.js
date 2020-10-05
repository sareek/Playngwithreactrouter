import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class BoilerPlate extends Component {
  state = { name: "", data: [] };
  handleName = (e) => {
    this.setState({ name: e.target.value });
  };

  login() {
    fetch(
      "https://my-json-server.typicode.com/pusendra/demo/profile?name=" +
        this.state.name
    ).then((response) =>
      response.json().then((data) => {
        if (data.length > 0) {
          localStorage.setItem("login", JSON.stringify(data));
          console.log(this.props.history.push("/presonal-info"));
        } else {
          alert("Enter true data");
        }
      })
    );
  }
  render() {
    return (
      <header className="Boiler">
        <Card
          className="text-center"
          style={{ height: "20rem", width: "30rem", background: "#DDD8B8" }}
        >
          <Card.Header>
            <h1>Welcome to Naming World</h1>
          </Card.Header>
          <Card.Body>
            <Card.Title>Register Your Name</Card.Title>
            <Card.Text style={{ marginLeft: "7rem" }}>
              <input
                type="name"
                placeholder="enter validator"
                onChange={this.handleName}
                value={this.state.username}
                style={{ background: "#4a5859" }}
              />
            </Card.Text>

            <Button
              onClick={() => {
                this.login();
              }}
              variant="dark"
            >
              Go Register
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">Support Us</Card.Footer>
        </Card>
      </header>
    );
  }
}
