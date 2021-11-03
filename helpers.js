const { default: Web3 } = require("web3");

const ETHER_ADDRESS = "0x0000000000000000000000000000000000000000";

const EVM_REVERT = "VM Exception while processing transaction: revert";

const ether = (n) => {
  return new web3.utils.BN(web3.utils.toWei(n.toString(), "ether"));
};

const tokens = (n) => ether(n);

const wait = (seconds) => {
  const milliseconds = seconds * 1000
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

module.exports = {
  tokens,
  ether,
  EVM_REVERT,
  ETHER_ADDRESS,
  wait,
};
