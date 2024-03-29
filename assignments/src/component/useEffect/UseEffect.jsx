import axios from "axios";
import { useEffect, useState } from "react";
import './index.css'

function UseHook() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products');
                setData(response.data.products);  // Adjust to match the actual structure of the response
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to run the effect only once after the initial render

    return (
        <>
            <h2 style={{ marginBottom: '20px', color: 'blue' }}>API Integration using useEffect</h2>

            {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
            {data && (
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
            )}
        </>
    );
}

export default UseHook;
