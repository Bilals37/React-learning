import { useState } from "react"


function FormInput() {

    const [input, setInput] = useState('')
    const [displaytext, setDisplay] = useState('');

    const handleInput = (event) => {
        setInput(event.target.value)
    }

    const handleButton = () => {
        setDisplay(input)
        setInput('')
    }


    return (
        <>
            <h2>Input Form</h2>
            <input type="text" onChange={handleInput} value={input} placeholder="Enter Text" />
            <button onClick={handleButton}>
                Display Text
            </button>
            <p>Displayed Text: {displaytext}</p>
        </>
    )
}

export default FormInput;