import React, { Component } from "react";
import { connect } from "react-redux";
import { accountSelector } from "../store/selectors";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-warning" style={{padding: "0.3rem 0.8rem"}}>
        <a className="navbar-brand" href="/#" style={{ color: "black", marginLeft: "10px" }}>
          LEMON SWAP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar nav ml-auto">
          <li className="nav-item">
            <a
              style={{ color: "black" }}
              className="nav-link small"
              href={`https://etherscan.io/address/${this.props.account}`}
              target="_/blank"
              rel="noopener noreferrer"
            >
              {this.props.account}
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    account: accountSelector(state),
  };
}

export default connect(mapStateToProps)(Navbar);
