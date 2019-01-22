import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 317f1f38d2aba37b609f20a2a28f1211635f034b3383f4f6d51c4feb63b37971"
  }
});
