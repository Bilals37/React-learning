import { useContext } from "react";
import MyContext from "./myContext";


const Child3 = (() => {

    const { message, name } = useContext(MyContext)
    return (
        <>
            {message}
            <h1>Hello I am {name}</h1>
        </>
    )
})

export default Child3;