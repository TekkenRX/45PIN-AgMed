const axios = require("axios");

class request {

  async get(url, data) {
    try {
      const promise = await axios.get(url);
      const dataPromise = promise.then((response) => response.data);
      return dataPromise;
    } catch (error) {
      return error;
    }
  }
  async post(url, data) {
    try {
      const promise = axios.post(url, data);
      const dataPromise = promise.then((response) => response.data);
      return dataPromise;
    } catch (error) {
      return error;
    }
  }

  async patch(url, data) {
    try {
      const promise = axios.patch(url, data);
      const dataPromise = promise.then((response) => response.data);
      return dataPromise;
    } catch (error) {
      return error;
    }
  }

  async delete(url, data) {
    try {
      const promise = axios.delete(url, data);
      const dataPromise = promise.then((response) => response.data);
      return dataPromise;
    } catch (error) {
      return error;
    }
  }
}

module.exports = request;
