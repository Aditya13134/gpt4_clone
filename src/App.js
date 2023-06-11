import React from 'react';
import {Article , Brand , CTA , Navbar} from './components'; 
import {Footer , Blog , Possibilities , Features , whatGPT3 , Header} from './containers'
import './App.css';


const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <whatGPT3 />
      <Features /> 
      <Possibilities />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App