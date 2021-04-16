import React, { useContext, useEffect, useState } from 'react';
import AppointsByDate from '../AppointsByDate/AppointsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';

const Dashboard = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const containerStyle = {
        backgroundColor: '#f4fdfb',
        height: '100%',
    }

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([])

    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('https://fast-thicket-91434.herokuapp.com/appointsByDate', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
        })
        .then(res => res.json())
        .then(data => setAppointments(data))
    }, [selectedDate])

    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-5  d-flex justify-content-center">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5">
                    <AppointsByDate appointments={appointments}/>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;