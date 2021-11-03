import { combineReducers } from "redux";

function web3(state = {}, action) {
  switch (action.type) {
    case "WEB3_LOADED":
      return { ...state, connection: action.connection };
    case "WEB3_ACCOUNT_LOADED":
      return { ...state, account: action.account };
    default:
      return state;
  }
}

function token(state = {}, action) {
  switch (action.type) {
    case "TOKEN_LOADED":
      return { ...state, loaded: true, contract: action.contract };
    default:
      return state;
  }
}

function exchange(state = {}, action) {
  switch (action.type) {
    case "EXCHANGE_LOADED":
      return { ...state, loaded: true, contract: action.contract };
    case "CANCEL_ORDERS_LOADED":
      return {
        ...state,
        cancelledOrders: { loaded: true, data: action.cancelledOrders },
      };
    case "FILLED_ORDERS_LOADED":
      return {
        ...state,
        filledOrders: { loaded: true, data: action.filledOrders },
      };
    case "ALL_ORDERS_LOADED":
      return {
        ...state,
        allOrders: { loaded: true, data: action.allOrders },
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  web3, //  it's the same thing as | web3: web3, | cause key and value are the same.
  token,
  exchange,
});

export default rootReducer;
