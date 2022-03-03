const getSongs = () => {
  return fetch('https://chart-toppers-api.herokuapp.com/api/v1/songs')
    .then(response => response.json())
}

export {getSongs};