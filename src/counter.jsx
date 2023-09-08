import { useState } from "react"

export default function Counter (){
    const [count,setCount] = useState(0);
    
   const clickHandelar = () =>{
        const newcount = count + 1
        setCount(newcount)
    }
    const reduceHandelar = () =>{
        const newcount = count - 1
        setCount(newcount)
    }
    
    return (
        <div style={{border:'2px solid yellow' }}>
            <h3>Counter : {count} </h3>
            <button onClick={clickHandelar}>Increase</button>
            <button onClick={reduceHandelar}>Reduce</button>
        </div>

    )
}