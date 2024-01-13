
import { useState } from "react"


const UseStateHook =()=>{

const [name, updateName]= useState("Umesh")
const [count, updateCount]= useState(0)
const [arrayNum, updateArray]= useState([2,4,54,7,66,46])

const nameChange=()=>{
    updateName("Gajanan")
}
const numChange=()=>{
    updateCount(count+3)
}
const arratChange=()=>{
    updateArray(arrayNum=>([...arrayNum,2,5,6,8,3,78]))
}
    return(
        <>
          <h3>Use State Hook </h3>
        <p>Name is : {name}</p>
         <button type="button" class="btn btn-primary" onClick={nameChange}>Name Change</button>
         <p>Count is : {count}</p>
         <button type="button" class="btn btn-secondary" onClick={numChange}>Name Number</button>
         <p>Array Num is : {arrayNum}</p>
         <button type="button" class="btn btn-secondary" onClick={arratChange}>Name Number</button>
        </>
       
       
      
    )
}
export default UseStateHook