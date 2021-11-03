import React, { Component } from "react";
import "./App.css";
// import Web3 from "web3";
// import Token from "../abis/Token.json";
import Navbar from "./Navbar";
import Content from "./Content";
import {
  loadWeb3,
  loadAccount,
  loadToken,
  loadExchange,
} from "../store/interactions";
import { connect } from "react-redux";
// import { accountSelector } from "../store/selectors"; account selector used as smoke test
import { contractsLoadedSelector } from "../store/selectors";

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData(this.props.dispatch);
  }

  async loadBlockchainData(dispatch) {
    if (window.ethereum) {
      await window.ethereum.enable();
    }
    // const web3 = new Web3(window.ethereum);
    const web3 = await loadWeb3(dispatch);
    // const network = await web3.eth.net.getNetworkType();
    const networkId = await web3.eth.net.getId();

    // const accounts = await web3.eth.getAccounts();
    const accounts = await loadAccount(web3, dispatch);

    // const abi = Token.abi;

    // const token = new web3.eth.Contract(abi, Token.networks[networkId].address);
    const token = await loadToken(web3, networkId, dispatch);
    if (!token) {
      window.alert(
        `Token smart contract not detected on the current network. Please select another network with Metamask`
      );
      return;
    }

    const totalSupply = await token.methods.totalSupply().call();

    const exchange = await loadExchange(web3, networkId, dispatch);
    if (!exchange) {
      window.alert(
        `Exchange smart contract not detected on the current network. Please select another network with Metamask`
      );
    }
    return;
  }

  render() {
    // console.log(this.props.account)  smoke test to get account
    return (
      <div>
        <Navbar />
        {this.props.contractsLoaded ? (
          <Content />
        ) : (
          <div className="content"></div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // account: accountSelector(state) this is a test to make sure we get account from state
    contractsLoaded: contractsLoadedSelector(state),
  };
}

export default connect(mapStateToProps)(App);
