import { TheContext } from "./useContex"
import { useContext } from "react"

const Child2 = (() => {

    const value = useContext(TheContext)
    return (
        <>
            <div className="childMain">
                <h1>I am <mark>{value}</mark> in child Component 2</h1>
            </div>

        </>
    )
})

export default Child2;