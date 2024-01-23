import { useState } from "react"
import './index.css'

function UseState1() {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 2)
    }
    const decrement = () => {
        setCount(count - 3)
    }


    return (
        <>
            <h1>Use State Hook</h1>
            <h2>Increment and Decrement <br /> Number: {count}</h2>
            <p><i>Below Buttons are to Increment  and Decrement  of Count </i></p>
            <button onClick={increment}>Increment </button>
            <button onClick={decrement}>Decrement </button>
            <hr />
        </>
    )
}
export default UseState1;