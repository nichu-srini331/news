import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import Weather from './Weather';
import { Link } from 'react-router-dom';




function Navbar() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-auto min-vh-100 navclass'>
        <h1 className='h1-nav'>NEW X.</h1>
          <ul className='ul-nav'>
            
            <li className='li-nav'>
            <Link to='/'>  <a className='nav-link px-2' href='#'><span className='ms-1 d-none d-sm-inline'>Dashboard</span></a></Link>
            </li>
            <li className='li-nav'>
            <Link to='/tech'> <a className='nav-link px-2' href='#'><span className='ms-1 d-none d-sm-inline'>Technology</span></a></Link>
            </li>
            <li className='li-nav'>
     <Link to='/sports'>         <a className='nav-link px-2' href='#'><span className='ms-1 d-none d-sm-inline'>Sports</span></a></Link>
            </li>
            <li className='li-nav'>
<Link to='/enter'>             <a className='nav-link px-2' href='#'><span className='ms-1 d-none d-sm-inline'>Entertainment</span></a></Link> 
            </li>
            <li className='li-nav'>
            <Link to='/job'>  <a className='nav-link px-2' href='#'><span className='ms-1 d-none d-sm-inline'>Job Hunting</span></a></Link>
            </li>
            <li className='li-nav'>
          <Link to='/br'>    <a className='nav-link px-2' href='#'><span className='ms-1 d-none d-sm-inline'>Top Headlines</span></a></Link>
            </li>
            <li className='li-nav'>
         <Link to='/ast'>     <a className='nav-link px-2' href='#'><span className='ms-1 d-none d-sm-inline'>Horoscope</span></a></Link>
            </li>
        
          </ul>

        </div>
      </div>

    </div>
  //   <div className=''>
  //   <nav class="vertical-nav navbar navbar-expand-lg navbar-g  d-flex">
  //   <div class="container-fluid">
  //     <a class="navbar-brand navh1" href="#">NewsX .</a>
  //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  //       <span class="navbar-toggler-icon"></span>
  //     </button>
  //     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
  //       <div class="navbar-nav nav-add">
  //         <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
  //         <a class="nav-link active" aria-current="page" href="#">Technology</a>
  //         <a class="nav-link active" aria-current="page" href="#">Entertainment</a>
  //         <a class="nav-link active" aria-current="page" href="#">Sports</a>
  //         <a class="nav-link active" aria-current="page" href="#">Others</a>
  //         <a class="nav-link active" aria-current="page" href="#">Job Hunting</a>
  //         <a class="nav-link active" aria-current="page" href="#">Bookmarks</a>
  //         <a class="nav-link active" aria-current="page" href="#">Zodiac Predc</a>
  //         <a class="nav-link active" aria-current="page" href="#">Top Headlines</a>
          

  //       </div>
  //     </div>
  //   </div>
  // </nav></div>
  // )
  )
}

export default Navbar