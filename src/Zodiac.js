import React, { useEffect,useState } from 'react'

function Zodiac() {

    // const sign = props.sign

    const[latest,setlatest] = useState([])
   
  useEffect(()=>{
    get()
},[])

    const get = () => {
       fetch("https://aztro.sameerkumar.website/?sign=aries&day=today",{
        method: 'POST'
    }).then((res)=>console.log(res.json()))
        }
        console.log(latest)
  return (
    <div>
<button onClick={get}>GET</button>
{latest.current_date}
    </div>
  )
}

export default Zodiac