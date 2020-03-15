import React from 'react';
import { Redirect } from 'react-router';
import HelpHeader from './sections/helpHeader';
import HelpView from './sections/HelpView';





class Viewhelp extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            redirect:false,
            }
            
            
        }
    
    
    componentWillMount(){
        if(sessionStorage.getItem('userData')){
            console.log('call user feed');
        }
        else{
            this.setState({redirect:true})
        }
    }

    render(){

        if(this.state.redirect){
            return(<Redirect to={'/login'}/>)
        }

        return(
            <div class="mb-0">
                <HelpHeader/> 
                <div class="card my-0 py-5 px-md-5 z-depth-1">
                    <div className="card-header">
                <HelpView/>
            </div>
                </div>
            
                
            </div>
        )
    }
}

export default Viewhelp;