import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {

  const [dogImageUrl, setDogImageUrl] = useState('');

  useEffect(() => {
    const apiUrl = 'https://dog.ceo/api/breeds/image/random';

    axios.get(apiUrl)
      .then(response => {
        setDogImageUrl(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching dog image:', error.message);
      });
  }, []);

  return (
    <div>
      <h1>Random Dog Image</h1>
      {dogImageUrl && <img src={dogImageUrl} alt="Random Dog" />}
    </div>
  );
};
export default App;
