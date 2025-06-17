import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = 'kI8nqUv8LbO8nA0FzN-McGs6dTd7e3kg6B_xdyRVU9Q'; // Never expose private keys
const BASE_URL = `https://www.strategyr.net/api/influencers/gwmr5pd?page=1`;


function Evolveapidata() {
 const [evolvedata, setevolvedata] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?key=${API_KEY}&q=London`)
      .then((response) => {
        setevolvedata(response.data);
        console.log(response.data); // ✅ Correct logging of data
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h3>evolvedata Info</h3>
      {evolvedata ? (
        <div>
          <p>City: {evolvedata.location.name}</p>
          <p>Temperature: {evolvedata.current.temp_c}°C</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Evolveapidata