import React from 'react';

class AdminTitleCard extends React.Component {
    render(){
        return(
            <section class="card aqua-gradient wow fadeIn text-uppercase">

                    {/* <!-- Content --> */}
                    <div class="card-body text-white text-center py-1 px-8 my-3">

                        <h1 class="mb-4">
                            <strong>Welcome to Intergrow</strong>
                        </h1>
                        <p>
                            <strong>Join with intergrow activities</strong>
                        </p>

                    </div>
                {/* <!-- Content --> */}
                </section>
        )
    }
}

export default AdminTitleCard;