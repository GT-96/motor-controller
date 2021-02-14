import logo from './logo.svg';
import './App.css';
import React from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserView, MobileView, isBrowser, isMobile} from "react-device-detect"
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:"", consoleLogs:[""]};

  }

  ledON(){
    fetch("http://192.168.1.103:6969/ledON")
    .then(res => res.text())
    .then(res=> this.setState({apiResponse: res}));
  }

  ledOFF(){
    fetch("http://192.168.1.103:6969/ledOFF")
    .then(res => res.text())
    .then(res=> this.setState({apiResponse: res}));
  }

  
  render (){
    //Mobile view
    if(isMobile){
      return (
        <div className="center">      
          <Button variant="primary" size="lg" 
            onPointerLeave={() => {
              this.ledOFF();
            }}
  
            onPointerEnter={() => {
              this.ledON();
            }
            }>
            Hold to activate
  
        </Button>

        <Button variant="primary" size = "lg" onClick={()=>{this.ledON();}}>
          Click to turn on
        </Button>

        <Button variant="primary" size = "lg" onClick={()=>{this.ledOFF();}}>
          Click to turn off
        </Button>

        <div className="fixed-bottom">
          <text>
            {}
          </text>
        </div>

  
        </div>
      );
    }else{
      //PC View
      return (
        <div className="center">      
          <Button variant="primary" size="lg" 
            onPointerLeave={() => {
              this.ledOFF();
            }}
  
            onPointerEnter={() => {
              this.ledON();
            }
            }>
            Hover to activate
  
        </Button>

        <Button variant="primary" size = "lg" onClick={()=>{this.ledON();}}>
          Click to turn on
        </Button>

        <Button variant="primary" size = "lg" onClick={()=>{this.ledOFF();}}>
          Click to turn off
        </Button>
  
        </div>
      );
    }



  }


}





export default App;
