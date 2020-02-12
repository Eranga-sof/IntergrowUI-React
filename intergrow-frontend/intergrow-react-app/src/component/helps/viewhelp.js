import React, {useState} from 'react';
import axios from 'axios';
import { MDBBtn, MDBContainer} from 'mdbreact';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, InputGroupText, InputGroupAddon, Input, FormGroup  } from 'reactstrap';
import { Toast, ToastBody, ToastHeader, Spinner } from 'reactstrap';


const COURSE_API_URL = 'http://localhost:8000/';


class HelpActions{
    
}

class Viewhelp extends React.Component{


    // helpActions = new HelpActions();
    _refreshHelps(){
        axios.get(COURSE_API_URL + 'helps/').then((response) => {
            this.setState({
                helps: response.data
            });
        });
    }

    state = {
        helps:[],

        newHelpData:{
            id:'',
            mentee:'',
            help_discription:'',
            help_date:''
        },

        newHelpToggleModal:false,
    }
    componentWillMount(){
        this._refreshHelps();
        // this.helpActions._refreshHelps();
    }

    newHelpToggle(){
        this.setState({
            newHelpToggleModal:true
        });
    }
    helpToggleClose(){
        this.setState({
            newHelpToggleModal:false
        });
    }


    render(){
        
        let helpRaw = this.state.helps.map((help) =>
        {    
            return (               
               
                <tr key={help.id}>
                    {/* contenteditable="true" */}
                    <td className="pt-3-half" >{help.mentee}</td>
                    <td className="pt-3-half" >{help.help_discription}</td>
                    <td className="pt-3-half" >{help.help_date}</td>
                </tr>
            )
        });

        let viewAllHelp = this.state.helps.map((help)=>{
            return(
                <div className="p-1 bg-primary my-2 mr-2 ml-2 rounded">
                <Toast key={help.id}>
                  <ToastHeader>
                    Reactstrap
                  </ToastHeader>
                  <ToastBody>
                      {help.help_discription}
                  </ToastBody>
                  <hr/>
                  <MDBBtn 
                    color = 'primary'
                    onClick = {this.newHelpToggle.bind(this)}
                    rounded 
                    >Responses</MDBBtn>
                  <MDBBtn 
                    color = 'primary'
                    onClick = {this.newHelpToggle.bind(this)}
                    rounded 
                    >Give Response</MDBBtn>
                </Toast>
              </div>
            );
        });

        let newHelp = this.state.helps.map((help)=>{
            return(
                <Modal isOpen={this.state.newHelpToggleModal} toggle={this.newHelpToggle.bind(this)}>
                        <ModalHeader onClick = {this.helpToggleClose.bind(this)}>Ask help..</ModalHeader>
                        <ModalBody>
                        <FormGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i class="fas fa-user mr-2" ></i></InputGroupText>
                                <Input placeholder="Mentee" value={this.state.newHelpData.mentee} onChange={(e) =>
                                {
                                    let { newHelpData } = this.state;

                                    newHelpData.mentee = e.target.value;

                                    this.setState({ newHelpData });

                                }} />
                            </InputGroupAddon>
                        </FormGroup>
                        <FormGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i class="fas fa-prescription-bottle mr-2" ></i></InputGroupText>
                                <Input type='textarea' placeholder="Discription" value={this.state.newHelpData.help_discription} onChange={(e) =>
                                {
                                    let { newHelpData } = this.state;

                                    newHelpData.help_discription = e.target.value;

                                    this.setState({ newHelpData });

                                }} />
                            </InputGroupAddon>
                        </FormGroup>                                    
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" rounded>Post</Button>{' '}
                    <Button color="danger" rounded onClick = {this.helpToggleClose.bind(this)} >Cancel</Button>
                    </ModalFooter>
                </Modal>
                
            );
        });


        return(
                <main class="">
                    <section class="card aqua-gradient wow fadeIn  text-uppercase">

                        {/* <!-- Content --> */}
                        <div class="card-body text-white text-center py-1 px-8 my-3">

                            <h1 class="mb-4">
                                <strong>Help & Response</strong>
                            </h1>
                            <p>
                                <strong>Asking help and response</strong>
                            </p>
                        </div>
                        {/* <!-- Content --> */}
                    </section>              
                        <div class="container px-5">
                    
                    <section>
                        {/* <MDBContainer> */}
                            <div className="card mb-4 mt-2 pt-2 pb-2 text-center wow fadeIn">
                                <span className="pull-right">
                                <MDBBtn 
                                color = 'primary'
                                
                                className={'btn btn-info'}
                                onClick = {this.newHelpToggle.bind(this)}
                                rounded 
                                >
                                    <i class="fas fa-paw mr-2" ></i>Ask Question</MDBBtn>
                                </span>
                            </div>
                        {/* </MDBContainer> */}

                        <div>
                            {newHelp}
                        </div>

                    </section>

                    <section>
                        {/* <MDBContainer> */}
                        <div className="card mb-4 mt-2 pt-2 pb-2 wow fadeIn">
                            {viewAllHelp}                           
                            
                        </div>

                    </section>
                        
                    </div>
                </main>
        )
    }


}

export default Viewhelp;