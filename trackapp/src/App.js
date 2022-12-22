import React from 'react';
import { Track} from './features/track/Track'
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Track/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
