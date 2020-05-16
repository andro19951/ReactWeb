import {createStore} from "redux";
import HeadSpace from "./HeadSpace";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import TagManager from 'react-gtm-module'

    const ADD_ID = "ADD_ID"

    const addItem = item => {
        return {
            type: ADD_ID,
            GTMid: item
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

    var tagManagerArgs = {

    }

export class Homeform extends React.Component {

    constructor(props) {
        super(props)
        this.state = {GTMid: ''}
        this.handleGTMidChange = this.handleGTMidChange.bind(this)
        this.handleGTMid = this.handleGTMid.bind(this)
    }


   handleGTMidChange(e) {
       console.log(e.target.value)
        this.setState({GTMid: e.target.value})

    }

    handleGTMid(e){
        console.log("GTMid:" + this.state.GTMid)
        e.preventDefault()
        store.dispatch(addItem(this.state.GTMid))
        console.log(store.getState())
        
        tagManagerArgs['gtmId']=this.state.GTMid
        TagManager.initialize(tagManagerArgs);

    }

    render(){
    return(  <div className="col-md-6 center">
        <HeadSpace/>
        <Form onSubmit={this.handleGTMid}>
            <Form.Group  controlid="ContainerIDform">
                <Form.Label>Container ID</Form.Label>
                <Form.Control type="text" placeholder="Enter Container ID here"  onChange={(e) => this.handleGTMidChange(e)}   />
                <Form.Text className="Text-muted">
                    Container Id should be like this: "GTM-123456".
                </Form.Text>
                <button type="submit" className="primary" >Submit ID</button>
            </Form.Group>
        </Form>
    </div>)};

}

export default Homeform