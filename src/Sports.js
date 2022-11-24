import React, { useEffect,useState } from 'react'
import Navbar from './Navbar'

function Sports() {
  const[latest,setlatest] = useState([])
   
  useEffect(()=>{
    get()
},[])

    const get = () => {
      fetch("https://newsdata.io/api/1/news?apikey=pub_13611920fc4e16de61d4303151117b14ba643&category=sports&language=en").then((res)=>res.json()).then((j)=>setlatest(j.results))
       console.log(latest)
        }
        
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-2'>
          <Navbar/>
        </div>
        <div className='col-10'>
          <div className='row ser'>
          <div className='col-3'><h1 className='h1-trend'>Sports</h1>
        </div>
            <div className='col-9'>
            <input class="form-control ser-in" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-dash" type="submit">Search</button></div>
          </div>
          <div className='row'>
          <div class="row">
            {latest.map(lat=>{return(
              
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{lat.title}</h5>
                    <p class="card-text">{lat.description}</p>
                    <a href={lat.link} class="btn btn-primary">Know More</a>
                    <a href="/chat" class="btn btn-primary">Discuss</a>
                  </div>
                </div>
              </div>
              
            
            )})
            }
          </div>
          </div>
        </div>

      </div>
      
      
    </div>
  )
}

export default Sports


// <Navbar/>
//       <h1 className='exph'>Sporting</h1> 
//         <form class="d-flex serch">
//       <input class="form-control  ser-s" type="search" placeholder="Search" aria-label="Search"/>
//       <button class="btn" type="submit">Search</button>
//       </form>
//       <div className='card-t'>
//             <div className='row card-t'>
//             { latest.map(lat => {
//                 return(
//                     <div className='col-4'> 
//                     <div class="card card-p">
// <div class="card-body">
// <h5 class="card-title">{lat.title}</h5>
// <p class="card-text">{lat.description}</p>
// <a href={lat.link} class="btn btn-primary">Explore More</a>
// </div>
// </div>
// </div>
//                 )
//             })
//             }
//     </div>
//     </div>