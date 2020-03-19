import React, {useState} from 'react';
import HelpList from './helpComponentGroup/HelpList';

const HelpView = () =>{
    return(
        <section>
            <div className="row mr-4 ml-4 mb-2 text-align-center pt-4">
                <div className='col-lg-12 col-md-12 col-sm-12 mr-0'>
                    <HelpList/>
                </div>
               
        
                
            </div>
        </section>    
    )

}
export default HelpView;