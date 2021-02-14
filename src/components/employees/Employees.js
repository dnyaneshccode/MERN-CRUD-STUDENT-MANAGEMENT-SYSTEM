import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

const Employees = () =>{
    const [employee, setemployee] = useState({
        firstname: '',
        lastname: '',
        address: '',
        email: '',
        phone: '',
        school: '',
        salary: '',
    })

    const { id} = useParams();

    useEffect(() => {
        loadEmploy();
    }, [])
    
    const loadEmploy = async () => {
        const res = await axios.get(`http://localhost:5000/employee/${id}`);
        setemployee(res.data);
    }

    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/">Back to Home</Link>
            <h1 className="display-4">User Name: {id}</h1>
            <hr/>
            <ul className="list-group w-50">
                <li className="list-group-item">FirstName: {employee.firstname}</li>
                <li className="list-group-item">LastName: {employee.lastname}</li>
                <li className="list-group-item">Address: {employee.address}</li>
                <li className="list-group-item">Email: {employee.email}</li>
                <li className="list-group-item">Phone: {employee.phone}</li>
                <li className="list-group-item">School: {employee.school}</li>
                <li className="list-group-item">Salary: {employee.salary}</li>
            </ul>
        </div>
    )

}

export default Employees;