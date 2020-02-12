// import React from 'react';

// function header(){
//     return(
//         <div>
//             <h1>
//                 Header
//             </h1>
//         </div>
//     );
// }

// export default header;
// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';


// const header = () =>
// {
//     return (
//         <div>
//             <AppBar >
//                 <Toolbar >
//                     <Typography style={{ color: 'white' }}>
//                         Navigation Bar
//                     </Typography>
//                 </Toolbar>
//             </AppBar>
//         </div>
//     )
// }
// export default header;

import React, { Component } from "react";
import
{
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from "react-router-dom";
import Route from 'react-router-dom/Route';


class header extends React.Component
{
  state = {
    isOpen: false
  };

  toggleCollapse = () =>
  {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render()
  {
    return (
      <MDBNavbar color="unique-color-dark" dark expand="md" className="fixed-top">
        <MDBNavbarBrand>

          <strong className="white-text"><a className="white-text h4-responsive font-weight-bold" href="/"> Intergrow</a></strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            &nbsp; &nbsp;&nbsp; &nbsp;
            <MDBNavItem >
              <a className="white-text" href="/home">Home</a>
            </MDBNavItem>
            &nbsp; &nbsp;
            <MDBNavItem>
              <a className="white-text" href="/employee">Empoyee</a>
            </MDBNavItem>
            &nbsp; &nbsp;
            <MDBNavItem>
              <a className="white-text" href="/goals">Goals</a>
            </MDBNavItem>
            &nbsp; &nbsp;
            <MDBNavItem>
              <a className="white-text" href="/help">Helps & Response</a>
            </MDBNavItem>
           
         {/* <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Dropdown</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem> */}
          </MDBNavbarNav>
          
          <MDBNavbarNav right>
            {/* <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="google-plus-g" />
              </MDBNavLink>
            </MDBNavItem> */}
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                 User <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Profile</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Log out</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>

    );
  }
}

export default header;