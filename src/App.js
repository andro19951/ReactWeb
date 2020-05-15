import React from 'react';
import {Route} from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import footer from './footer';
import HeadNav from "./HeadNav";


const Home = () => <div className="col-md-6 center">
    <Form>
        <Form.Group controlid="ContainerIDform">
            <Form.Label>Container ID</Form.Label>
            <Form.Control type="text" placeholder="Enter Container ID here"/>
            <Form.Text ClassName="Text-muted">
                 Container Id should be like this: "GTM-123456".
            </Form.Text>
            <Button className="primary">Submit ID</Button>
        </Form.Group>
    </Form>
</div>;
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
