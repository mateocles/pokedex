import axios from "axios";
import { apiUrl } from "../Config/Environments";
axios.defaults.baseURL = apiUrl;

export default {
  get(dir, cb, errorCb) {
    axios
      .get(apiUrl + dir)
      .then((r) => {
        cb(r);
      })
      .catch((e) => {
        errorCb(e);
      });
  },
  async post(payload, dir, cb, errorCb) {
    await axios
      .post(apiUrl + dir, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((r) => {
        cb(r);
      })
      .catch((e) => {
        errorCb(e)
      });
  },
  put(payload, dir, cb, errorCb) {
    axios
      .put(apiUrl + dir, payload)
      .then((r) => {
        cb(r);
      })
      .catch((e) => {
        errorCb(e);
      });
  },
};
