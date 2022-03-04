import { cleanData } from './utilities';

const getSongs = () => {
  return fetch('https://chart-toppers-api.herokuapp.com/api/v1/songs')
    .then(response => response.json())
    .then(data => cleanData(data))
}

export {getSongs};