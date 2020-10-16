import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { routes } from "../routes/routes";
import { Link } from "react-router-dom";

export default class NamingForm extends Component {
  state = {
    firstName: "",
    nameError: "",
    lastNameError: "",
    addressError: "",
    emailError: "",
    lastName: "",
    address: "",
    email: "",
  };

  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
      nameError: "",
    });
  };
  handleChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
      emailError: "",
    });
  };
  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
      lastNameError: "",
    });
  };
  handleChangeAddress = (event) => {
    this.setState({
      address: event.target.value,
      addressError: "",
    });
  };

  valid = () => {
    if (
      !this.state.firstName.length > 0 &&
      !this.state.lastName.length > 0 &&
      !this.state.address.length > 0 &&
      !this.state.email.length > 0
    ) {
      this.setState({
        nameError: "Please enter first name",
        lastNameError: "Please enter lastname",
        emailError: "pleas enter email",
        addressError: "please enter address",
      });
    } else if (!this.state.lastName.length > 0) {
      this.setState({ lastNameError: "Please enter  lastname" });
    } else if (!this.state.address.length > 0) {
      this.setState({ addressError: "Please enter address" });
    } else if (!this.state.email.length > 0) {
      this.setState({ emailError: "Please enter first email" });
    } else if (!this.state.firstName.length > 0) {
      this.setState({ nameError: "Please enter first name" });
    } else {
      return true;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.valid();
    const { firstName, lastName, address, email } = this.state;
    let data = [];

    if (localStorage.getItem("data")) {
      data = JSON.parse(localStorage.getItem("data"));

      data.push({ firstName, lastName, address, email });
      console.log("data", data);
    } else {
      data = [{ firstName, lastName, address, email }];
    }

    localStorage.setItem("data", JSON.stringify(data));

    this.setState({
      firstName: "",
      nameError: "",
      lastNameError: "",
      addressError: "",
      emailError: "",
      lastName: "",
      address: "",
      email: "",
    });
    this.props.history.push("/overview");
  };
  handleEmptyForm = (e) => {
    this.valid();
    e.preventDefault();
    console.log("enter values");
  };
  render() {
    return (
      <>
        <Link to={routes.HOME}>
          <Button variant="dark">Go Back</Button>
        </Link>
        <section className="Boiler">
          <form
            onSubmit={
              this.state.firstName.length > 0 &&
              this.state.lastName.length > 0 &&
              this.state.address.length > 0 &&
              this.state.email.length > 0
                ? this.handleSubmit
                : this.handleEmptyForm
            }
          >
            <label htmlFor="firstName" className="label">
              FirstName
            </label>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChangeFirstName}
              placeholder="Enter First Name"
            />
            <p style={{ color: "red", fontSize: "12px" }}>
              {this.state.nameError}
            </p>

            <label htmlFor="lastName" className="label">
              LastName
            </label>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChangeLastName}
              placeholder="Enter Last Name"
            />
            <p style={{ color: "red", fontSize: "12px" }}>
              {this.state.lastNameError}
            </p>
            <label htmlFor="address" className="label">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleChangeAddress}
              placeholder="Enter Address"
            />
            <p style={{ color: "red", fontSize: "12px" }}>
              {this.state.addressError}
            </p>
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
              placeholder="Enter email"
            />
            <p style={{ color: "red", fontSize: "12px" }}>
              {this.state.emailError}
            </p>
            <button type="submit">Submit</button>
          </form>
        </section>
      </>
    );
  }
}
