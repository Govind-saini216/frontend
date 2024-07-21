import React from 'react';
import Navbar from './component/Navbar.jsx';
import AddRecipe from './component/AddRecipe.jsx';
import Login  from './component/Login.jsx';
import Register from './component/Register.jsx';
import Home from './component/Home.jsx';
import Saved from './component/Saved.jsx';
import Add from './component/Add.jsx';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Details from './component/Details.jsx';
import Profile from './component/Profile.jsx';

export default function App() {
  return (
    <>
      <Router>

          <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/addrecipe' element={<AddRecipe/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/saved' element={<Saved />} />
          <Route path='/Add' element={<Add />} />
          <Route path='/:id' element={<Details />} />
          <Route path='/profile' element={<Profile/>} />

        </Routes>
        <ToastContainer/>
      </Router>
    </>
  )
}

