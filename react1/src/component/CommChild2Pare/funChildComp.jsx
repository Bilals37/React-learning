import React, { useState } from 'react';

const ChildComp = ({ sendDataToParentComp }) => {
    const [message, setMessage] = useState('Welcome to React');

    const sendMessage = () => {
        sendDataToParentComp(message);
    };

    return (
        <>
            <h2>Child Comp</h2>
            <button onClick={sendMessage}>Send Message to Parent Comp</button>
        </>
    );
};

export default ChildComp;
