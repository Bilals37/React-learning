import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ApiCallUsinguseEffect = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (error) {
        setError(error);
      }
      console.log(data);
    };

    fetchData();

  }, []);

  return (
    <>
      <h2>API Integration using useEffect</h2>
      {error && <p>Error: {error.message}</p>}
      {data && (
        <ul>
          {data.map((post) => (
            <div key={post.id} style={{ marginTop: "30px" }}>
              <span >({post.id})</span>
              <h5 >{post.title}</h5>
              <p>{post.body}</p>
            </div>

          ))}
        </ul>
      )}
    </>
  );
};

export default ApiCallUsinguseEffect;
