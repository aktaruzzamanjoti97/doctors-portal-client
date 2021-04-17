import React from 'react';
import fluoride from '../../../images/fluoride.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import covid19 from '../../../images/Covid-19.jpg';
import pressure from '../../../images/Blood Pressue.jpeg';
import diabetase from '../../../images/Diabetics.jpg';

const serviceData = [
    {
        name: 'Covid-19 Information',
        img: covid19
    },
    {
        name: 'Blood Pressure',
        img: pressure
    },
    {
        name: 'Diabatics',
        img: diabetase
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                {/* <h5 style={{color: '#1CC7C1'}}>Our Services</h5> */}
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 mt-5 pt-5 row">
                    {
                        serviceData.map(service => <ServiceDetail service={service}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;