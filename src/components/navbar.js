import React, { Component } from "react";
import { link } from "react-router-dom";
import logo from "../assets/ico/menu.svg";

class Navbar extends Component {
  render() {
    return (
      <div class="ct-header">
        <link to="/">
          <img className="img-logo" src={logo} alt="logo" />
        </link>
        <link to="/create" className={this.props.txtColor}>
          CREATE
        </link>
      </div>
    );
  }
}
export default Navbar;
