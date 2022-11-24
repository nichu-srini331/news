import React, { useEffect,useState } from 'react'
import Axios from 'axios';
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Breaking from './Breaking';
import Weather from './Weather';

function Dash() {
  const[lat,setlat] = useState([])
  const[latest,setlatest] = useState([])
  const [title,settitle] = useState([])
  const[desc,setdesc] = useState([])
  const[link,setlink] = useState([])


  useEffect(()=>{

    fetch("https://newsdata.io/api/1/news?apikey=pub_13656bb97e2c535e8bcc4b82692c762c305c9&language=en&country=in").then((res)=>res.json()).then((j)=>{setlat(j.result)
    fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1").then((res)=>res.json()).then((j)=>setlatest(j.quotes[0]))
 
  })
   
},[])

// const get1 = async() => {
 
//   console.log(latest)
//   console.log(lat)



  if(lat){
      return (

        <div className='container-fluid'>
          <div className='row'>
            <div className='col-2'><Navbar/></div> 
            <div className='col-10'>
              <div className='row ser'>
                <div className='col-3'><h1>Hola Amigo!</h1>
            <span>Read the world Today...</span></div>
                <div className='col-6'>
                <input class="form-control ser-in" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-dash" type="submit">Search</button></div>
          <div className='col-3 wet-col'><Weather/></div>
          
          
                </div>
              <div className='row'>
              <div className='div-quote'>
    <h2>Quote of the Day...</h2>
    <br></br>
    <h5>{latest.text}
    </h5>
    </div>
    
        </div>
              <div className='row'>        
              <div class="row trend-r">
              <h1 className='h1-trend'>Trending</h1>
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{lat[0].title}</h5>
            <img src={lat[0].urlToImage}/>
            <p class="card-text">{lat[0].description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            <a href="/chat" class="btn btn-primary">See Chat</a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{lat[1].title}</h5>
            <img src={lat[1].urlToImage}/>
            <p class="card-text">{lat[1].description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{lat[2].title}</h5>
             <img src={lat[2].urlToImage}/>
            <p class="card-text">{lat[2].description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
              </div>
              </div> 
    
          </div>
          
        </div>
      )
      }
    }    
  


export default Dash


{/* <div className='container-fluid'>
      <Navbar/>
      <div className="col-3">
        <h1 className='h1-c'>Hola Amigo!</h1>
        <span className='h2-c'>Read the world </span>

      </div>
      <div className='col-9'>
      <div class="container-fluid ser">
    <form class="d-flex">
      <input class="form-control  ser-s" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn" type="submit">Search</button>
    </form>
  </div>
      </div>
      <div className='div-quote'>

        <h2>Quote of the Day...</h2>
<br></br>
        <h5>{latest.text}

</h5>

      </div>
        <div className='trending'>

          <h1 className='trend'>Trending</h1>
          <Link to='/exp'><button className='btn bt-exp'> Explore More</button></Link>
          <div class="container">
  <div class="row ">
    <div class="col-4 ">
    <div class="card col1" style={{"width": "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">North Korean Leader Kim Jong Un Reveals His Daughter For First Time At Missile Launch</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.outlookindia.com/international/north-korean-leader-kim-jong-un-reveals-his-daughter-for-first-time-at-missile-launch-news-238565" class="btn btn-primary">Go to Content</a>
    
  </div>
  
</div>
    </div>
    <div class="col-4 ">
    <div class="card col2" style={{"width": "18rem"}}>
  
  <div class="card-body">
    <h5 class="card-title">Yatra Online Gets Sebi's Nod To Float IPO</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.outlookindia.com/business/yatra-online-gets-sebi-s-nod-to-float-ipo-news-238564" class="btn btn-primary">Go to Content</a>
    
  </div>
  
</div>
    </div>
    <div class="col-4">
    <div class="card" style={{"width": "18rem"}}>

  <div class="card-body">
    <h5 class="card-title">Shama Sikander Strips Down To Sexy Black And Blue Monokini, Posts Hot Pic from Pool Party</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.news18.com/news/movies/shama-sikander-strips-down-to-sexy-black-and-blue-monokini-posts-hot-pic-from-pool-party-6421183.html" class="btn btn-primary">Go to Content</a>
    
  </div>
  
</div>
    </div>
  </div>
  </div>
          

        </div>

</div> */}