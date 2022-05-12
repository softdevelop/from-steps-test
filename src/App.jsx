import Page1 from './components/page1/Page1'
import Page2 from './components/page2/Page2'
import Err from './components/err/Err'
import Bill from './components/bill/Bill'

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Page1/>}/>
        <Route exact path="/form" element={<Page2/>}/>
        <Route exact path="/err" element={<Err/>}/>
        <Route exact path="/bill" element={<Bill/>}/>
      </Routes>
    </Router>

  );
}

export default App;
