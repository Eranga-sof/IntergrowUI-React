import React from 'react';
import { MDBBtn } from 'mdbreact';
import { MDBCarousel, MDBIcon, MDBCard, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
    "mdbreact";
import {Progress } from 'reactstrap';

import EllipsisText from 'react-ellipsis-text';
import '../../css/home.css';

import axios from 'axios';
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";

//response for carousel **** 
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

let i = 0;
/*****end */

/**Backend API */
const COURSE_API_URL = 'http://localhost:8000/employees/';



class Home extends React.Component {

    constructor(props)
    {
        super(props);
        i = 0;
    }
    state = {
        i:1,
        employees: []         
    }

// Initial stage
    componentWillMount()
    {
        this._refreshProject();
    }

    _refreshProject()
    {
        axios.get(COURSE_API_URL).then((response) =>
        {
            this.setState({
                employees: response.data
            })
            // console.log('sfsdf');
            console.log(this.state.employees);
        });

    }
// End

    render() {

        let topEmployees = this.state.employees.map((emp) =>
        {
            if (i < 3) {
                i = i + 1;
                return (

                    <div className='pt-3 pb-4' style={{
                        paddingLeft: "10px", paddingRight: '10px'
                    }}>
                        <Link to={"/employee/" + emp.employee_id} refresh="true" >
                            <MDBCard
                                className='card-image'
                                style={{

                                    // backgroundImage:
                                        // `url(data:image/png;base64,${policyiess.policyImage})`,
                                    backgroundImage:'url(https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            >
                                <div
                                    className='text-white text-center  d-flex align-items-center rgba-black-strong py-5 px-4 rounded'>

                                    <div>
                                        <h3 className='py-3 font-weight-bold'>
                                            <strong>{emp.first_name}</strong>
                                            <br />
                                            <h6>{emp.full_name}</h6>
                                        </h3>
                                        <p className='pb-3'>
                                            <EllipsisText text={emp.last_name} length={"70"} />
                                        </p>
                                        <MDBBtn color='success' size='md'>
                                            <MDBIcon far icon='clone' className='left' />More</MDBBtn>
                                    </div>
                                </div>
                            </MDBCard>
                        </Link>
                    </div>
                )

            }

        });
    
    let teamProgress = (()=>{
        return(
            <div>
            <Progress value={2 * 5} />
            <Progress color="success" value="25" />
            <Progress color="info" value={50} />
            <Progress color="warning" value={75} />
            <Progress color="danger" value="100" />
          </div>
        );
    });

        
    return(
        <div>
             <section class="card aqua-gradient wow fadeIn text-uppercase">

                {/* <!-- Content --> */}
                <div class="card-body text-white text-center py-1 px-8 my-1">

                    <h1 class="mb-4">
                        <strong>Welcome to Intergrow</strong>
                    </h1>
                    <p>
                        <strong>Join with intergrow activities</strong>
                    </p>

                </div>
            {/* <!-- Content --> */}
            </section>

            <MDBCarousel
                    activeItem={1}
                    length={3}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1"
                >
                    <MDBCarouselInner style={{height:'300px'}}>
                        <MDBCarouselItem itemId="1">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                                    alt="First slide"
                                />
                                <MDBMask overlay="black-light" />
                            </MDBView>
                            {/* <MDBCarouselCaption>
                                <h3 className="h3-responsive">Light mask</h3>
                                <p>First text</p>
                            </MDBCarouselCaption> */}
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                                    alt="Second slide"
                                />
                                <MDBMask overlay="black-strong" />
                            </MDBView>
                            {/* <MDBCarouselCaption>
                                <h3 className="h3-responsive">Strong mask</h3>
                                <p>Second text</p>
                            </MDBCarouselCaption> */}
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                                    alt="Third slide"
                                />
                                <MDBMask overlay="black-slight" />
                            </MDBView>
                            {/* <MDBCarouselCaption>
                                <h3 className="h3-responsive">Slight Mast</h3>
                                <p>Third text</p>
                            </MDBCarouselCaption> */}
                        </MDBCarouselItem>                        
                    </MDBCarouselInner>                    
        </MDBCarousel>

            
            <div className="pl-4 pr-4"> 
                    <div className="card mb-4 mt-3 wow fadeIn">

                        <div className="card-header font-weight-bold">
                            <span><h2>Activities</h2></span>
                        </div>
                        
                           
                    </div>

                    <div className="card mb-4 mt-3 wow fadeIn">

                        <div className="card-header font-weight-bold">
                            <span><h2>Goal Reached</h2></span>
                        </div>
                        <span className="pull-right">
                            {teamProgress}
                            
                        </span>
                    </div>

                    <div className="card mb-4 mt-3 wow fadeIn">

                        <div className="card-header font-weight-bold">
                            <span><h2>Team Activities</h2></span>
                        </div>
                        <span className="pull-right">
                            {teamProgress}
                            
                        </span>
                    </div>


                    <div className="card mb-4 mt-3 wow fadeIn">

                        <div className="card-header font-weight-bold">
                            <span><h2>Top Employees</h2></span>
                        </div>
                        <span className="pull-right">

                        <Carousel
                                swipeable={false}
                                draggable={false}
                                showDots={true}
                                responsive={responsive}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                                autoPlaySpeed={4000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                deviceType={this.props.deviceType}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px"
                                >
                                {topEmployees}
                                </Carousel>
                        </span>
                    </div>

                    <div className="card mb-4 mt-3 wow fadeIn">

                        <div className="card-header font-weight-bold">
                            <span><h2>Overall Progress</h2></span>
                        </div>
                        <span className="pull-right">

                            
                        </span>
                    </div>
                </div>

            </div>
    );
    
    }
}

export default Home;
