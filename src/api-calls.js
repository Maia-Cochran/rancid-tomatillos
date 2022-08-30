const fetchAllData = (dataType) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2${dataType}`)
    .then(response => response.json())
    .catch(error => console.log(`API error: ${error.message}`));
  }

const getAllData = (data) => {
  const result = Promise.all([fetchAllData(data)])
    .then(responses => {
      return responses
    })
    return result;
  }

 
export { getAllData }

