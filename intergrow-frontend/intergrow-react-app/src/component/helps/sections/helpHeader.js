import React, {useState} from 'react';
import { TITLE_COLOR } from '../../../constants/utill';
import { Right } from 'react-bootstrap/lib/Media';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import {  MDBInput } from 'mdbreact';
import Axios from 'axios';
import { COURSE_API_URL } from "../../../constants/utill";


class HelpHeader extends React.Component{

    state = {
        modal: false,
        newHelp:{
            help_topic:'',
            mentee:'1',
            help_discription:'',
            redirect:false,
          }
      }

    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }

      createHelp(){
        Axios.post(COURSE_API_URL + 'helps/', this.state.newHelp).then((response) => {
                
                console.log(response.date);
                this.toggle()
                // this.successfullyCreated()
            });    
            
    }

render(){
    return(
        <section className={"card wow fadeIn text-uppercase "+ TITLE_COLOR}>
            {/* <!-- Content --> */}
            <div class="text-white py-1 px-4 my-2">

        <div style={{float: 'left'}}>
             <h1 >
                    <strong class="text-center">Help & Response</strong>
                </h1>   
        </div>
                
        <div style={{float: 'right', color:'black',textSize: '60px' }}>
        <MDBBtn onClick={this.toggle}>+ HELP</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="lg">
        <MDBModalHeader toggle={this.toggle}>Create Help</MDBModalHeader>
        <MDBModalBody style={{color:'red'}}>
        <form>
        <div className="grey-text">
         
          <MDBInput label="Help Topic" icon="tag" group type="text" validate error="wrong" success="left"value={this.state.newHelp.help_topic} onChange={(e) =>
                    {
                        let { newHelp } = this.state;

                        newHelp.help_topic = e.target.value;
                        
                        this.setState({ newHelp });

                    }}  />
          <MDBInput type="textarea" rows="4" label="Your Message" icon="pencil-alt"  value={this.state.newHelp.help_discription} onChange={(e) =>
                    {
                        let { newHelp } = this.state;

                        newHelp.help_discription = e.target.value;

                        this.setState({ newHelp });

                    }}  />
        </div>
      </form>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
            <div className="text-center">
                <MDBBtn color="primary" onClick = {this.createHelp.bind(this)}>Save</MDBBtn>
                </div>
        </MDBModalFooter>
      </MDBModal>
        </div>    
    
        
               
         
            </div>
            {/* <!-- Content --> */}
            
        </section> 
    )
}

}
export default HelpHeader;