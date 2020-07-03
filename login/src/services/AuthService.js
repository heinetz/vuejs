// src/services/AuthService.js

import axios from "axios";

const url = "http://localhost:3000/api/";

export default {
  login(credentials) {
    console.log("AuthService.js:login()", credentials);
    return axios
      .post(url + "login/", credentials)
      .then((response) => response.data);
  },
  signUp(credentials) {
    console.log("AuthService.js:signUp()", credentials);
    return axios
      .post(url + "sign-up/", credentials)
      .then((response) => response.data);
  },
  getSecretContent() {
    console.log("AuthService.js:getSecretContent()");
    return axios.get(url + "secret-route/").then((response) => response.data);
  },
};
