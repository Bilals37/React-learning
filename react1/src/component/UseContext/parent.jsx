import React, { useState } from "react";
import MyContext from "./myContext";
import Child1 from "./child1";

const ParentContext = () => {
    const [message, setMessage] = useState("Hello from context")
    const [name, setName] = useState("Bilal")

    return (
        <>

            <MyContext.Provider value={{ message, name }}>
                <Child1 />
            </MyContext.Provider>
        </>
    )
}

export default ParentContext;