import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Dash from './Dash';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Tech from './Tech';
import Entertain from './Entertain';
import Sports from './Sports';
import Others from './Others';
import Jobs from './Jobs';
import Bookmarks from './Bookmarks';
import Explore from './Explore';

import Aztro from './Aztro';
import Zodiac from './Zodiac';
import Breaking from './Breaking';
import Chatroo from './Chatroo';
import Navbar from './Navbar';
import Weather from './Weather';

function App() {
  

  

  
  return (
    <div className="App">
      <Router>    <Routes>
      <Route path='/' element = {<Dash/>}/>
    <Route path='/tech' element={<Tech/>}/>
    <Route path='/enter' element={<Entertain/>}/>
    <Route path='/sports' element={<Sports/>}/>
    <Route path='/others' element={<Others/>}/>
    <Route path='/job' element={<Jobs/>}/>
    <Route path='/bookm' element={<Bookmarks/>}/>
    <Route path='/exp' element={<Explore/>}/>
    <Route path='/ast' element={<Aztro/>}/>
    <Route path='/br' element={<Breaking/>}/>
    <Route path='/chat' element={<Chatroo/>}/>
    <Route path='/wet' element={<Weather/>}/>
    </Routes>
    </Router>

    <div class="container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Dashboard</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Technology</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Sports</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Entertainment</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
    </ul>
    <p class="text-center text-f text-muted">© 2021 Company, Inc</p>
  </footer>
</div>

      
      </div>
  );
}

export default App;
