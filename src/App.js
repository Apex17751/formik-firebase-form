import React from 'react';
import './index.css'
import { Routes, Route } from "react-router-dom"
import Log from './Components/Log';
import Form from './Components/Form';
import Page from './Components/Page';

function App() {
  return (
    <div className="App">
        <Routes>

       <Route path="/" 
        element={<Page />}
      />
      <Route path="/form" 
        element={<Form />}
      />

      <Route path="/log" 
        element={<Log/>}
      />

      </Routes>
      
    </div>
  );
}

export default App;
