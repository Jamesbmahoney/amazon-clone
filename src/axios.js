import axios from "axios";

const instance = axios.create({
  baseUrl: "http://localhost:5001/clone-3f5fd/us-central1/api", // The API (cloud function) URL
});

export default instance;
