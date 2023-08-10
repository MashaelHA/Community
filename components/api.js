const API_URL = "https://jsonplaceholder.typicode.com";

export default {
  async makeRequest(resource, method, body) {
    const request = await fetch(API_URL + "/" + resource, {
      method: method,
      body: body,
      //   headers: {
      //     "Content-type": "application/json; charset=UTF-8",
      //   },
    });
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
    return request.json();
  },

  async post(resource, body) {
    return await this.makeRequest(resource, "POST", {});
  },

  async get(resource) {
    return await this.makeRequest(resource);
  },
};
