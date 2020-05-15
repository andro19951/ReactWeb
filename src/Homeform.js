import {createStore} from "redux";
import HeadSpace from "./HeadSpace";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";

    const ADD_ID = "ADD_ID"

    const addItem = item => {
        return {
            type: this.ADD_ID,
            item: item
        };
    };

    const reducer = (state = [], action) => {
        switch (action.type) {
            case ADD_ID:
                return [...state.slice(0, action.index), [action.item]];
            default:
                return state;
        }
    };
   var store = createStore(reducer);


export class Homeform extends React.Component {
    state ={
        GTMid
    }


   handleGTMidChange: function (e) {
        this.setState({GTMid: e.target.value});
    }

    handleGTMid(){
        console.log("GTMid" + this.state.GTMid);
    }

    render(){
    return(  <div className="col-md-6 center">
        <HeadSpace/>
        <Form>
            <Form.Group controlid="ContainerIDform">
                <Form.Label>Container ID</Form.Label>
                <Form.Control type="text" placeholder="Enter Container ID here" value={this.state.GTMid}/>
                <Form.Text className="Text-muted">
                    Container Id should be like this: "GTM-123456".
                </Form.Text>
                <Button className="primary" onClick={hand}>Submit ID</Button>
            </Form.Group>
        </Form>
    </div>)};

}