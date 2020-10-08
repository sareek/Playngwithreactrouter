import React from "react";
import { ListGroup, Button } from "react-bootstrap";
export default class NameList extends React.Component {
  state = { data: JSON.parse(localStorage.getItem("data")) };
  handleOnClick = () => this.props.history.goBack();
  render() {
    return (
      <>
        <Button variant="dark" onClick={this.handleOnClick}>
          Go Back
        </Button>
        <div className="Boiler">
          <ListGroup variant="flush" style={{ width: "30%" }}>
            {this.state.data.map((item) => (
              <ListGroup.Item>
                <p>Name:{`${item.firstName} ${item.lastName}`}</p>
                <p>Address:{item.address}</p>
                <p>Contact:{item.email}</p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </>
    );
  }
}
