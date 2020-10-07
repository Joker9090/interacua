
/* eslint-disable */
import axios from 'axios';

export const base = `http://interacua.bartuken.com/`;
export const baseAssetsUrl = `http://interacua.bartuken.com`;

export default (apiPath) => {
  const totalTrys = 5;
  return new Promise((resolve, reject) => {
    const apiCall = (trys) => {
      axios.get(base + apiPath).then((response) => {
        resolve(response);
      }).catch((e) => {
        if (trys === 0) reject(e);
        else apiCall(trys - 1);
      });
    };
    apiCall(totalTrys);
  });
};
