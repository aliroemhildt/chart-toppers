import { cleanData } from './utilities';

const handleError = (response) => {
  if (response.status === 404) {
    throw `${response.status}. Oops! Looks like this page doesn't exist.`;
  } else if (!response.ok && response.status >= 400 && response.status < 500) {
    throw `${response.status}. Something went wrong... please reload the page and try again!`;
  } else if (!response.ok && response.status >= 500) {
    throw `${response.status}. Sorry, looks like we're having some trouble on our end. We're working on it.. please come back later!`;
  } else {
    return response.json();
  }
}

const getSongs = () => {
  return fetch('https://chart-toppers-api.herokuapp.com/api/v1/songs')
    .then(response => handleError(response))
    .then(data => cleanData(data))
}

export {getSongs};