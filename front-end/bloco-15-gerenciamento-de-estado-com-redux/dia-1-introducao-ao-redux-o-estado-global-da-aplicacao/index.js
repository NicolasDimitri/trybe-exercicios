const Redux = require("redux");

const INITIAL_STATE = {
  login: false,
  email: "",
};

const fazerLogin = (email) => ({
  type: "LOGIN",
  email,
});

const reducer = (state = INITIAL_STATE, { email, type }) => {
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email,
      };
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

store.dispatch(fazerLogin("alguem@email.com"));

console.log(store.getState());

