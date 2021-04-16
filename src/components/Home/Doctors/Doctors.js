import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import { faVestPatches } from '@fortawesome/free-solid-svg-icons';

const Doctors = () => {

    const [doctors, setDoctors] = useState([]);
    useEffect( () => {
        fetch('https://fast-thicket-91434.herokuapp.com/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])

    return (
        <div className="doctors">
            <div className="container">
                <h5 style={{color: '#12D0DC', fontWeight: 'bold'}} className="text-center">Our Doctors</h5>
                <div className="row">
                    {
                     doctors.map(doctor =><Doctor key={doctor._id} doctor={doctor} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Doctors;