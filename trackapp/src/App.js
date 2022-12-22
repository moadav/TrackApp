import React from 'react';
import { Track} from './features/track/Track'
import Home from './app/Home/Home';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import TrackRapportItem from './app/components/TrackItem/TrackRapportItem';
import Navbar from './app/components/NavBar/NaviBar';
import TrackDetailItem from './app/components/TrackDetail/TrackDetailItem';


function App() {
  return (
    <BrowserRouter> 
    <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/tracks' element={<Track />}/>
          <Route path="/rapport/:id" element={<TrackRapportItem/>}/>
          <Route path="/rapport/:id/:number" element={<TrackDetailItem/>}/>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
