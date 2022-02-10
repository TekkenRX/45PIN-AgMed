const axios = require("axios");

class baseCall{
  async baseCall(method, url, data) {
  data = "";
  if (method === "get") {
    try {
      const response = axios.get(url, data);
      return response;
    } catch (error) {
      return error;
    }
  } else if (method === "post") {
    try {
      const response = axios.post(url, data);
      return response;
    } catch (error) {
      return error;
    }
  } else if (method === "patch") {
    try {
      const response = axios.patch(url, data);
      return response;
    } catch (error) {
      return error;
    }
  } else {
    try {
      const response = axios.delete(url, data);
      return response;
    } catch (error) {
      return error;
    }
  }

  module.exports = baseCall();
}
}


export default baseCall;
