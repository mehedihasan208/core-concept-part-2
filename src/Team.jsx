import { useState } from "react"

export default function Team () {
    const [Team,setCount] = useState(11);
    
    const teamHandelar = () =>{
        const newCount = Team + 1
            setCount(newCount)
    }
            const counterNumber = () =>{
                const newCount = Team - 1
                setCount(newCount)
            }

    

    return(
        <div style={{border:'2px solid red'}}>
            <h3>Player : {Team}</h3>
            <button onClick={teamHandelar}>Increase</button>
            <button onClick={counterNumber}>Reduce</button>
        </div>
    )
}