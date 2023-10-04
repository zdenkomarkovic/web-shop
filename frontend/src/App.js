import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import UserServices from './services/UserServices';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:4000/';
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
