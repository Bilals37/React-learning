import { TheContext } from "./useContex"
import { useContext } from "react"

const Child1 = (() => {

    const value = useContext(TheContext)
    return (
        <>
            <div className="childMain">
                <h1>I am <mark>{value}</mark> in child Component 1</h1>
            </div>

        </>
    )
})

export default Child1;