import React from "react";
import { MDBContainer,MDBBox,  MDBCardHeader, MDBIcon, MDBMedia, MDBBtn, MDBPageItem, MDBPagination, MDBPageNav } from "mdbreact";
import { COURSE_API_URL, BG_COLOR } from "../../constants/utill";
import Axios from 'axios';
import moment from 'moment'
import { Redirect } from 'react-router';

class responseList extends React.Component{
  constructor(props){
    super(props);
  
        
    }


componentWillMount(){
    if(sessionStorage.getItem('userData')){
        console.log('call user feed');
    }
    else{
        this.setState({redirect:true})
    }
}

  state = {
    responses:[],
    help:[],
    mentee:[],
    newResponse:{
      help_request:'',
      mentor:'1',
      response_discription:'',
      redirect:false,
    }
  }

  getHelp(){
    Axios.get(COURSE_API_URL+'help/'+this.props.match.params.id).then((respones) => {
      console.log(respones.data)
      this.setState({
        help:respones.data,
        mentee:respones.data.mentee
      })
    })
  }

  getResponseList(){
    Axios.get(COURSE_API_URL+'response/'+this.props.match.params.id).then((response) => {
      console.log(response.data)
      this.setState({
       
        responses:response.data,
        
      })
    })
    
  }
  createResponse(){
    Axios.post(COURSE_API_URL + 'responses/', this.state.newResponse).then((response) => {
            console.log(response.date);
            let {responses} = this.state;
            responses.push(response.data);
            this.getResponseList()
            // this.successfullyCreated()
        });    
        
}

  componentDidMount() {
    this.getResponseList()
    this.getHelp()
    this.state.newResponse.help_request = this.props.match.params.id

    
  }
  MyFunction(time) {
    var tempDate = new Date();
    var date = tempDate.getFullYear() + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
    var currDate = date;
    
    var dateStringWithTime = moment(time).format('YYYY/MM/DD HH:mm:ss');
    var send = moment().subtract(dateStringWithTime, currDate).dayOfYear();
    return (
    <div>Posted On: {dateStringWithTime}</div>
    );
  }

  render(){
    
    if(this.state.redirect){
      return(<Redirect to={'/login'}/>)
          }
    
    let allResponse = this.state.responses.map((response) => {      
      return(
        <div className="border-100 ">
          <MDBContainer>
        <MDBMedia className="d-block d-md-flex mt-4 border-100 ">
        <img className="card-img-64  mx-auto mb-2" src="/user.jpg"alt="" />
        <MDBMedia body className="text-md-left ml-md-3 ml-0 ">
          <h5 className="font-weight-bold ">{response.mentor.full_name}
            <MDBIcon icon="comment" className="pull-right ml-2" />
            <div style={{ fontWeight:'100', marginLeft:'1px', fontSize:'15px'}} className="date">
             <br></br> {this.MyFunction(response.response_date)}</div>
          </h5>
          {/* <div style={{
                      borderBottom: "1px solid gray",
                      marginBottom: "1.5rem"
                    }}></div> */}
        </MDBMedia>
         
      </MDBMedia>
      </MDBContainer>
      <MDBContainer className="p-3" style={{color:'black', fontWeight:'600'}}>
        {response.response_discription} 
      </MDBContainer>
      <br></br>
      <div style={{
                      borderBottom: "1px solid gray",
                      marginBottom: "1.5rem"
                    }}>
                    
        </div>
      </div>
      )
    });

    // let helpRequest = this.state.help.map((help) => {
    //   return(

    //   )
    // });

    return(
      
      <MDBContainer style={{marginTop:'30px',  width:'100%',maxWidth: "100%",}}>
        
        <div class="card my-0 py-5 px-md-5 z-depth-1">
        <div>
          <MDBCardHeader className="border-100 font-weight-bold d-flex justify-content-between">
                <p className="mr-4 mb-0">{this.state.mentee.full_name}</p>
                <ul className="list-unstyled list-inline mb-0">
                  {/* <li className="list-inline-item mr-3"><MDBIcon className="mr-2" icon="envelope"  />Send message</li> */}
                  <li className="list-inline-item mr-3"><MDBIcon className="mr-2" icon="user" />See profile</li>
                  {/* <li className="list-inline-item mr-3"><MDBIcon className="mr-2" icon="rss" />Follow</li> */}
                </ul>
          </MDBCardHeader>
          <MDBMedia className="p-4 bg-white">
                <MDBMedia >
                  <img className="card-img-64 d-flex z-depth-1 mr-4" src="/user.jpg" alt="" />
                </MDBMedia>
                <MDBMedia body>
                <h5 className="font-weight-bold mt-0">
                    {this.state.help.help_topic}
                  </h5>
              
                  <cite title="Source Title"> Post On {moment(this.state.help.help_date).format('YYYY/MM/DD HH:mm:ss')}</cite>
                  </MDBMedia>
        </MDBMedia>
        <MDBContainer>
          <MDBMedia body>
          {this.state.help.help_discription}
        </MDBMedia>
        </MDBContainer>
        
        </div>
        <br></br>
      <MDBCardHeader className="border-4 gray font-weight-bold">
        <p className="mr-4 mb-0">{this.state.responses.length} Response</p>
      </MDBCardHeader>
      
      {allResponse}
      <br></br><br></br><br></br>
      <div style={{
                      borderBottom: "1px solid #000000",
                      marginBottom: "1.5rem"
                    }}>
                    
        </div>
      <div className="form-group mt-4">
                  <h3 htmlFor="quickReplyFormComment">Your Response</h3>
                  <textarea className="form-control" id="quickReplyFormComment"
                  value={this.state.newResponse.response_discription} onChange={(e) =>
                    {
                        let { newResponse } = this.state;

                        newResponse.response_discription = e.target.value;

                        this.setState({ newResponse });

                    }}  rows="5"></textarea>
                  <div className="text-center my-4">
                    <MDBBtn size="sm" color="primary" onClick = {this.createResponse.bind(this)}>Post</MDBBtn>
                  </div>
      </div></div>
    </MDBContainer>
    )
  }

  

}

export default responseList;