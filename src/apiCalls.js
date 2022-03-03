const getSongs = () => {
  return fetch('http://localhost:4000/api/v1/songs')
    .then(response => response.json())
}

export {getSongs};