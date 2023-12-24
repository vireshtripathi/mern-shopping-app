import axios from "axios";

// Get without Auth function
export const getWithoutAuth = (url) =>
  new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => {
        if (response && response.data) {
          resolve(response.data);
        }
      })
      .catch((ex) => {
        reject(ex);
      });
  });

export const postWithoutAuth = (url, entity) =>
  new Promise((resolve, reject) => {
    axios
      .post(url, entity)
      .then((response) => {
        if (response?.data) {
          resolve(response.data);
        }
      })
      .catch((ex) => {
        reject(ex);
      });
  });
