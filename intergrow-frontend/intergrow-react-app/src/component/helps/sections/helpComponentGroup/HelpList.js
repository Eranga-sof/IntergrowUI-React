import React, { Component } from 'react';
import { MDBTypography, MDBBox,MDBIcon, MDBView} from 'mdbreact';
import Axios from 'axios';
import { COURSE_API_URL } from '../../../../constants/utill';
import moment from 'moment'


class HelpList extends React.Component{

  state = {
    help : [],
    currentPage :1,
    postsPerPage :5,
  }

  getHelpList(){
    Axios.get(COURSE_API_URL + 'helps/').then((response) =>{
      console.log(response.data)
      this.setState({
        help: response.data,
      })
    })
  }

 

  componentDidMount(){
    this.getHelpList()
  }
 
  render(){
   function changeBackground(e) {
    e.target.style.color = 'blue';
  } 
  function changeBackgroundnLeave(e) {
    e.target.style.color = 'black';
  }
     
       

    let viewHelpList =this.state.help.map((help) => {
       
        let status = '';
        if(help.help_state === true)
          {
            status = <MDBIcon icon="bullseye" style={{marginRight: "10px", color:"green"}} />
          }
        if(help.help_state === false)
          {
            status = <MDBIcon icon="bullseye" style={{marginRight: "10px", color:"red"}} />
          }
      return(
        <a href={'/response/' + help.id} >   
      {/* <div style={{cursor:'pointer'}} onMouseMove={changeBackground} onMouseOut = {changeBackgroundnLeave}> */}
        <div> 
        <MDBTypography blockquote bqColor='success'>
          <MDBBox tag='p' mb={0} className='bq-title font-weight-bold' >
            <div style={{color:'black'}} >
            
              {status}
              {help.help_topic}   
            </div>
          </MDBBox>
          <MDBBox tag="footer" mb={2} className="blockquote-footer" style={{marginLeft:'10px'}}>By {help.mentee.first_name}  <cite title="Source Title">- Post On {moment(help.help_date).format('YYYY/MM/DD HH:mm:ss')}</cite></MDBBox>

          <p style={{marginLeft:'30px'}}>
            {help.help_discription}
          </p>

        </MDBTypography>
        
        <div style={{
                      borderBottom: "1px solid #000000",
                      marginBottom: "1.5rem"
                    }}>
                    
        </div>
    </div>
    </a>
      )
    })
    return(
      <div>
      {viewHelpList}
      </div>)
  }
}

// const TypographyPage = () => (
//   <>
  
//   <MDBTypography blockquote bqColor='success'>

//     <MDBBox tag='p' mb={0} className='bq-title font-weight-bold'>
//     <div style={{color:'black'}} >
//         Help Topic XXX   <MDBIcon icon="bullseye" style={{marginLeft: '10px', color:'red'}} />
//       </div>
//     </MDBBox>
//     <p>
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
//       quibusdam dignissimos itaque harum illo! Quidem, corporis at quae
//       tempore nisi impedit cupiditate perferendis nesciunt, ex dolores
//       doloremque! Sit, rem, in?
//     </p>
//   </MDBTypography>
//   </>
// );

export default HelpList;