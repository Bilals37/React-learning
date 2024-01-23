import axios from "axios";
import { useEffect, useState } from "react";
import './index.css'

function UseHook1() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [fetchData, setFetchData] = useState(false); // State to trigger fetching

    useEffect(() => {
        const fetchDataFromAPI = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products');
                setData(response.data.products);
            } catch (error) {
                setError(error);
            }
        };

        // Check if fetchData is true before fetching data
        if (fetchData) {
            fetchDataFromAPI();
        }
    }, [fetchData]);

    return (
        <>
            <h1>Use Effect Hook</h1>
            <h3 style={{ marginBottom: '20px', color: 'blue' }}>API Integration using useEffect</h3>
            <h4>Fetch data using conditional Fetching</h4>

            {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}

            {data ? (
                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th>Discount Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.brand}</td>
                                <td>{item.title}</td>
                                <td>{item.stock}</td>
                                <td>{item.price}</td>
                                <td>{item.discountPercentage}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No data available. Click the button to fetch data. <br />
                    <i>By Clicking on below button it will fetch all data from API</i><br />
                    {/* Button to trigger fetching */}
                    <button onClick={() => setFetchData(true)}>Fetch Data</button>
                </p>
            )}


            <hr />
        </>
    );
}

export default UseHook1;
