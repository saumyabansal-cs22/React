import './App.css'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// import { set } from 'mongoose';

import About from './components/About';
function App()
{
  const[dtext,setdtext]=useState('enable dark mode');
  const [mode,setmode] = useState('light');
  const [alert,setalert]=useState(null);
  const showalert = (message,type)=>{
      setalert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setalert(null);
      }, 700);
  }
  
  
  const togglemode=()=>{
    if(mode==='light'){ 
      setmode('dark')
      setdtext('disable dark mode')
      document.body.style.backgroundColor='#071d33';
      document.body.style.color='white'
      document.getElementById('mybox').style.backgroundColor="grey";
      document.getElementById('mybox').style.color="white";
      showalert("Dark mode enabled","success");
      setInterval(() => {
        document.title="Textutils is amazing"
      }, 2000);
      setInterval(() => {
        document.title="Install now"
      }, 1500);
    }
    else{
      setmode('light')
      setdtext('enable dark mode')
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      document.getElementById('mybox').style.backgroundColor="white";
      document.getElementById('mybox').style.color="black";
      showalert("light mode enabled","success");  
      document.title="Textutils-Home";  
    }
  }
  return (
    <><Router>

    <Navbar title="TextUtils" about="ABOUT US" mode={mode}  toggle={togglemode} disable={dtext}  />
    <Alert alert={alert}/>  
    {/* <Navbar /> */}
    <div className="container">
    <Switch>
          <Route path="/about">
            <About />
          </Route>
         
          <Route path="/">
    <Textform showalert={showalert} />
           
          </Route>
        </Switch>
    {/* <About/> */}
    </div>
    </Router>
    
  
    </>

  );
}
export default App;