import axios from "axios";

const setAuthToken = token => {
  if (token) {
    // setting global header if token is found in local storage
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
