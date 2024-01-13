import axios from "axios";
import { useEffect, useState } from "react";

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
                            <th style={{ border: '1px solid gray', padding: '8px', textAlign: 'center' }}>ID</th>
                            <th style={{ border: '1px solid gray', padding: '8px', textAlign: 'center' }}>Brand</th>
                            <th style={{ border: '1px solid gray', padding: '8px', textAlign: 'center' }}>Model</th>
                            <th style={{ border: '1px solid gray', padding: '8px', textAlign: 'center' }}>Stock</th>
                            <th style={{ border: '1px solid gray', padding: '8px', textAlign: 'center' }}>Price</th>
                            <th style={{ border: '1px solid gray', padding: '8px', textAlign: 'center' }}>Discount Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td style={{ border: '1px solid gray', padding: '8px', textAlign: 'center' }}>{item.id}</td>
                                <td style={{ border: '1px solid gray', padding: '8px', textAlign: 'center' }}>{item.brand}</td>
                                <td style={{ border: '1px solid gray', padding: '8px', textAlign: 'center' }}>{item.title}</td>
                                <td style={{ border: '1px solid gray', padding: '8px', textAlign: 'center' }}>{item.stock}</td>
                                <td style={{ border: '1px solid gray', padding: '8px', textAlign: 'center' }}>{item.price}</td>
                                <td style={{ border: '1px solid gray', padding: '8px', textAlign: 'center' }}>{item.discountPercentage}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}

export default UseHook;
