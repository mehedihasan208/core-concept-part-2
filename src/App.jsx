import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './Team'
import Users from './User'
import Friends from './friends'



function App() {
  
  function clickHandelar(){
    alert('no option here')
  }
  const clickHandelar2 =() => {
    alert('no option here')
  }
  function clickHandelar4(num){
    alert(num + 5)
  }

  return (
    <>     
      <h3>React core concept 2</h3> 
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>


      <button onClick={clickHandelar}>First</button>     
      <button onClick={clickHandelar2}>Second</button>     
      <button onClick={()=>{alert('he is no more')}}>Third</button>     
      <button onClick={()=>clickHandelar4(22)}>Four</button>     
    </>
  )
}

export default App
