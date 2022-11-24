import React, { useEffect, useState } from 'react'

function Weather() {

    const[weth,setweth] = useState([])
    const[name,setname] = useState("")
    const[text,settext] = useState("")
    const[icon,seticon] = useState("")
    const[cel,setcel] = useState("")

    useEffect(()=>{
        get()
    },[])

    const get = () => {
        fetch("http://api.weatherapi.com/v1/current.json?key=8abe355778c2485699c114020222011&q=India&aqi=no").then((res)=>res.json()).then((r)=>{
            setname(r.location.name)
            seticon(r.current.condition.icon)
            settext(r.current.condition.text)
            setcel(r.current.feelslike_c)
        })
    }
    return (
    <div className='wet-cont'>
       <img src={icon}/>
       <h4>{name},{text}</h4>
        
        <h6>{cel}</h6>
    </div>
  )
}

export default Weather