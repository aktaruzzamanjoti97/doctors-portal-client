import React from 'react';
import featured from '../../../images/featured.png';

const FeaturedService = () => {
    return (
       
            <section className="features-service pb-0 pd-md-5 my-5">
                <div className="container mb-5">
                    <div className="row mb-5">
                        <div className="col-md-5 mb-4 m-md-0">
                            <img className="img-fluid" src={featured} alt=""/>
                        </div>
                        <div className="col-md-7 align-self-center">
                            <h1>Exceptional Dental Care, on your Term</h1>
                            <p className="text-secondary my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eos commodi iure praesentium inventore. Accusamus nihil nostrum velit sequi ut! Porro consectetur quas magni commodi animi tempore doloremque, repellendus perspiciatis?</p>
                            <button style={{backgroundColor: '#12D0DC', color: 'white', fontWeight: '700'}} class="btn">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default FeaturedService;