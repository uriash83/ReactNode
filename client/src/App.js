
// /client/App.js
import React, { Component } from "react";
import {BrowserRouter , Route} from 'react-router-dom';
import Header from './components/Header';
import ViewClimb from './components/views/climb';
import ViewRun from './components/views/run';
import ViewHome from './components/views/home';
//import ViewRPi from './components/views/rpi';

class App extends Component {

  componentDidMount(){
    console.log('componentDidMount')
  }
  
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
  render() {
    
    return (

        <div>
          <BrowserRouter>
            <Header/>
                <Route path='/climb' exact component={ViewClimb}/>
                <Route path='/run' exact component={ViewRun}/>
                <Route path='/' exact component={ViewHome}/>
                  
          </BrowserRouter>      
        </div>  
    );
  }
}

export default App;
//view rawApp2.jsx hosted with ❤ by GitHub
