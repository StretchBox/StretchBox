import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './stylesheets/App.scss';
import { PrivateRoutes } from './components/privateRoutes';
import Home from './components/home';
import Login from './components/login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route path='/' element={<Home/>} />  
        </Route>

        <Route path='/login' element={<Login/>} />   
      </Routes>
    </Router>
  )     
}

export default App;