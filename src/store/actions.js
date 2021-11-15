// WEB3
function web3Loaded(connection) {
  return {
    type: "WEB3_LOADED",
    connection: connection,
  };
}

function web3AccountLoaded(account) {
  return {
    type: "WEB3_ACCOUNT_LOADED",
    account: account,
  };
}

// TOKEN
function tokenLoaded(contract) {
  return {
    type: "TOKEN_LOADED",
    contract,
  };
}

//EXCHANGE
function exchangeLoaded(contract) {
  return {
    type: "EXCHANGE_LOADED",
    contract,
  };
}

function cancelledOrdersLoaded(cancelledOrders) {
  return {
    type: "CANCEL_ORDERS_LOADED",
    cancelledOrders,
  };
}

function filledOrdersLoaded(filledOrders) {
  return {
    type: "FILLED_ORDERS_LOADED",
    filledOrders,
  };
}

function allOrdersLoaded(allOrders) {
  return {
    type: "ALL_ORDERS_LOADED",
    allOrders,
  };
}

// CANCEL ORDER IN PROGRESS
function orderCancelling() {
  return {
    type: "ORDER_CANCELLING",
  };
}

// CANCEL ORDER
function orderCancelled(order) {
  return {
    type: "ORDER_CANCELLED",
    order,
  };
}

// FILLING ORDER IN PROGRESS
function orderFilling() {
  return {
    type: "ORDER_FILLING",
  };
}

// FILL ORDER
function orderFilled(order) {
  return {
    type: "ORDER_FILLED",
    order,
  };
}

module.exports = {
  web3Loaded,
  web3AccountLoaded,
  tokenLoaded,
  exchangeLoaded,
  cancelledOrdersLoaded,
  filledOrdersLoaded,
  allOrdersLoaded,
  orderCancelling,
  orderCancelled,
  orderFilling,
  orderFilled,
};
