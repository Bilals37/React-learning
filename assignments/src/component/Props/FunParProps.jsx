import { useState } from "react"
import FunChildProps from "./FunChildProps";


function FunParProps() {
    const [message, setMessage] = useState("Hello Props I am From Parent Function Component")
    const user = {
        name: "Bilal",
        age: 22,
        city: "Shrirampur",
    }
    return (
        <>
            <FunChildProps message={message} data={user} />
        </>
    )
}
export default FunParProps;