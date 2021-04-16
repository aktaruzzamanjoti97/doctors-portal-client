import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section style={{marginTop: '150px'}} className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt=""/>
                    </div>
                    <div className="col-md-7 py-5 text-white text-style">
                        <h5 className="text-primary text-uppercase">Appointment</h5>
                        <h1 className="my-4">Make an Appointment <br/> Today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In magni, iste enim dolorem fuga veniam nisi quaerat dolorum repudiandae labore!</p>
                        <button style={{backgroundColor: '#12D0DC', color: 'white', fontWeight: '700'}} class="btn">Learn More</button>      
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;