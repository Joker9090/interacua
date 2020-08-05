
/* eslint-disable */
import axios from 'axios';

export const base = `${process.env.API_URL}/`;
export const baseAssetsUrl = `${process.env.API_URL}`;
export default (apiPath) => {
  const language = localStorage.getItem('lang') || '';
  const totalTrys = 5;
  return new Promise((resolve, reject) => {
    let prefix = 'en-';
    if (language === 'es') prefix = 'es-';
    if (language === 'pt') prefix = 'pt-';
    const apiCall = (trys) => {
      axios.get(base + prefix + apiPath).then((response) => {
        resolve(response);
      }).catch((e) => {
        if (trys === 0) reject(e);
        else apiCall(trys - 1);
      });
    };
    apiCall(totalTrys);
  });
};
