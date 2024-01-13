import React, { useEffect, useState } from 'react'
import axios from 'axios';


const ApiCallingUseEff = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://json-placeholder.mock.beeceptor.com/users')
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
            console.log(data);
        };
        fetchData();
    }, []);

    return (
        <>
            <div className='container'>
                <h2>API Integration using useEffect</h2>
                <ul className='empTable'>
                    {data.map((post) => (

                        <div key={post.id} className='empData'>
                            <img src="https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_1280.png" alt="" />

                            <h6><b>Name:</b> {post.name}</h6>
                            <div className='empDet'>
                                <p><b>Username:</b> {post.username}</p>
                                <p><b>Company:</b> {post.company}</p>
                                <p><b>Email:</b> {post.email}</p>
                                <p><b>Zip:</b> {post.zip}</p>
                                <p><b>state:</b> {post.state}</p>
                                <p><b>Country:</b> {post.country}</p>
                                <p><b>Phone:</b> {post.phone}</p>
                            </div>

                        </div>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ApiCallingUseEff;
