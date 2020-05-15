import React from 'react';
import {Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import footer from './footer';
import HeadNav from "./HeadNav";




function App() {


  return (
    <div className="App">
     <div>
      <HeadNav/>
         <hr />

          <Route exact path="/home" component={Home}/>
          <Route children={footer}/>
     </div>
    </div>
  );

}

export default App;
