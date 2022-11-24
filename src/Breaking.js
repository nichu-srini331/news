import React, { useEffect,useState } from 'react'
import Axios from 'axios';
import Navbar from './Navbar'

function Breaking() {
    const[latest,setlatest] = useState([])
   
    useEffect(()=>{
      
  },[])
  
      // const get = () => {
      //   fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=88d655364d984c3dbd9f7c1f411b154d").then((res)=>res.json()).then((j)=>setlatest(j.results))
      //    console.log(latest)
      //     }
          const res = Axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=88d655364d984c3dbd9f7c1f411b154d").then((r)=>setlatest(r.data.articles)) 
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-2'>
          <Navbar/>
        </div>
        <div className='col-10'>
          <div className='row ser'>
          <div className='col-3'><h1 className='h1-trend'>Breaking News</h1>
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
                    <h5 class="card-title">{latest.title}</h5>
                    <img src={lat.urlToImage} className="img-c"/>
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

export default Breaking

// Breaking
//         <div className='card-t'>
//           <div className='row card-t'>
//           { latest.map(lat => {
//               return(
//                   <div className='col-4'> 
//                   <div class="card card-p">
// <div class="card-body">
// <img src={lat.urlToImage} className="img-c"/>
// <h5 class="card-title">{lat.title}</h5>
// <p class="card-text">{lat.description}</p>

// <a href={lat.url} class="btn btn-primary">Explore More</a>
// </div>
// </div>
// </div>
//               )
//           })
//           }
//   </div>
//   </div>