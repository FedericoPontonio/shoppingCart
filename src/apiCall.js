// Define the API URL
const apiUrl = 'https://fakestoreapi.com/products';

function apiCall() {
    // Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

}

export default apiCall;

//tutto inutile