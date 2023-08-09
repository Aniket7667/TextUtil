import { useState } from 'react';
import './App.css';
import  About  from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  
  const [mode, setMode] = useState('light');
  
  const toggle =()=>{
      if(mode==='light') {
        setMode('dark');

        document.body.style.backgroundColor = 'rgb(4, 39, 67)';
      }
      else {
        setMode('light');

        document.body.style.backgroundColor = 'white';
      }
  }
  
  return (
    <>
    {/* <Router> */}
      <Navbar title='Application EMX' about='About' mode={mode} toggle ={toggle} />
     
          <div className='container'>

      {/* <Routes> */}
          {/* <Route path="/about" element ={ <About />} /> */}
           
          {/* <Route path="/"element ={ <TextForm heading='Enter the text to analyze' mode={mode} />} /> */}
          <TextForm heading='Enter the text to analyze' mode={mode} />
            
        {/* </Routes> */}
        
        </div>

      {/* </Router> */}

    </>
  );
}

export default App;
