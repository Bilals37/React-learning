import { useState, createContext } from "react";
import Parent from "./parent";

export const TheContext = createContext()

const Contex = (() => {

    const [userName, setUsername] = useState("useContext")
    return (
        <>
            <div className="main">
                <TheContext.Provider value={userName}>
                    <h1>I am {userName}</h1>

                    <Parent />
                </TheContext.Provider>
            </div>
        </>
    )
})

export default Contex;