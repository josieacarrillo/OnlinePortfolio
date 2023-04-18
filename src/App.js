import React from 'react';
import HomePage from './Pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';

function App() {
  return (
    <Router>
        <div className="App">
        <Navigation/>
            <div id="page-body">
               <Routes>
                 <Route path = "/" element= {<HomePage />} />
               </Routes>
            </div>
        </div>

    </Router>
  );
}

export default App;
