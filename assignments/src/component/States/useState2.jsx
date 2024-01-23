import React, { useState } from 'react';

function ToggleComponent() {

    const [isOn, setIsOn] = useState(false);


    const handleToggle = () => {

        setIsOn(!isOn);
    };

    return (
        <div>
            <h2>Toggle Component</h2>
            <p>The state is: {isOn ? 'ON' : 'OFF'}</p>
            <button onClick={handleToggle}>
                Toggle
            </button>
            <hr />
        </div>
    );
}

export default ToggleComponent;
