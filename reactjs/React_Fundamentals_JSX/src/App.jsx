import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'


import Header from '../components/Header';
import Footer from '../components/Footer';
import StudentInfo from '../components/StudentInfo';

function App() {
  const lstMenuItems = [
    "Menu item 1",
    "Menu item 2",
    "Menu item 3",
    "Menu item 4",
    "Menu item 5",
  ]
  return (
    <>
      <Header menuItems={lstMenuItems}/>
      <StudentInfo></StudentInfo>
      <Footer></Footer>
    </>
  )
}

export default App
