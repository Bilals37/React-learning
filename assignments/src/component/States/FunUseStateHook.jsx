import { useState } from "react";


function FunUseHook() {

    const [name, setName] = useState("Umesh Sir")
    const [tecStack, setTec] = useState("React.js")

    const changeName = () => {
        setName("Gajanan Sir")
    }

    const changeStack = () => {
        setTec("JavaScript")
    }
    const handleButtonClick = () => {
        changeName();
        changeStack();
    };

    return (
        <>
            <h1>useStat Hook In Function Component</h1>
            <h3>Bilal's Mentor for <mark>{tecStack}</mark> is <mark>{name}</mark> </h3>

            <p><i>By Clicking below button u can change Stack and Mentor</i></p>
            <button onClick={handleButtonClick} style={{ borderRadius: "5px" }}>Click Me</button>
        </>
    )
}

export default FunUseHook;