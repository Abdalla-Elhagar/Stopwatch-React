
import { useState , useEffect } from 'react'
import './App.css'


export default function App() {
  const [time , setTime] = useState(0)
  const [running , setRunning] = useState(false)
  useEffect(()=>{
    let interval;
    if(running){
      interval = setInterval(()=>{
      setTime(e=>e+10)
    },10)
    } else if(!running) {
      clearInterval(interval)
    }
    return ()=>clearInterval(interval)
  },[running])

  
  return (
    <>
      <span>{('0' + Math.floor((time/60000)%60)).slice(-2)}:</span>
      <span>{('0' + Math.floor((time/1000)%60)).slice(-2)}:</span>
      <span>{('0' + Math.floor((time/10)%100)).slice(-2)}</span>

      <br />
      <button onClick={()=>setRunning(true)}>start</button>
      <button onClick={()=>setRunning(false)}>stop</button>
      <button onClick={()=>setTime(0)}>reset</button>
      
    </>
  )
}

