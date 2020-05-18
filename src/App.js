import React from 'react';
import {Route, IndexRoute} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import footer from './footer';
import HeadNav from "./HeadNav";
import Homeform from "./Homeform";
import {BlogList} from "./BlogList";



function App() {


  return (
    <div className="App">
     <div>
      <HeadNav/>

         <hr />
     <Route exact path="/" component={Homeform}/>
          <Route exact path="/home" component={Homeform}/>
          <Route exact path="/blog" component={BlogList}/>
          <Route exact path="tasks"/>
          <Route children={footer}/>
     </div>
    </div>
  );

}

export default App;
