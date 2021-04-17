import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center py-3">
            <img style={{height: '150px'}} src={service.img} alt=""/>
            <h5 style={{fontWeight: 'bold'}} className="my-3 mb-3 text-brand text-uppercase">{service.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, velit.</p>
        </div>
    );
};

export default ServiceDetail;