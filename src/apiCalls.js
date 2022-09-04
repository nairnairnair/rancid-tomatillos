const apiCalls = { 
  getData: (id) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)  
    .then(rsp => {
      if (!rsp.ok) {
        throw new Error('Unable to access the server.  Please try again!')
      } else {
          return rsp.json()
          }           
      })
  }
}
  export default apiCalls