import React, { useState } from 'react';
import ChildComp from './ChildComp';

const FunParentComp = () => {
    const [messageFromChildComp, setMessageFromChildComp] = useState('');

    const handleDataFromChild = (message) => {
        setMessageFromChildComp(message);
    };

    return (
        <>
            <h2>Parent Comp</h2>
            <h4>Message From Child Comp : {messageFromChildComp}</h4>
            <ChildComp sendDataToParentComp={handleDataFromChild} />
        </>
    );
};

export default FunParentComp;
