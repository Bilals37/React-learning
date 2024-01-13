import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ApiCall = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/');
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
            console.log(data);
        };

        fetchData();

    }, []);

    return (
        <>
            <h2>API Integration using useEffect</h2>

            {loading && <p>Loading...</p>}
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
    )
}

export default ApiCall;