import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const EditEmployee = () => {
  const history = useHistory();
  const { id } = useParams();
  const [loading, setloading] = useState(false)
  const [employees, setemployees] = useState({
    firstname: '',
    lastname: '',
    address: '',
    email: '',
    phone: '',
    school: '',
    salary: '',
  });

  const {
    firstname,
    lastname,
    address,
    email,
    phone,
    school,
    salary,
  } = employees;

  const onInputChange = e => {
      setemployees({...employees, [e.target.name]: e.target.value});
  }
  useEffect(() => {
      loadEmploy();
  }, [])

  const onSubmit = async (e) => {
      e.preventDefault();
      await axios.patch(`http://localhost:5000/employee/${id}`, employees);
      history.push('/')
  }

  const loadEmploy = async () => {
      setloading(true);
      const result = await axios.get(`http://localhost:5000/employee/${id}`);
      setemployees(result.data)
  }

  return (
    <>
      <div className='container'>
        <div className='w-75 mx-auto shadow p-5'>
          <h2 className='text-center mb-4'>Edit A User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Your FirstName'
                name='firstname'
                value={firstname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Your Lastname'
                name='lastname'
                value={lastname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                class='form-control'
                placeholder='Enter Your Address'
                name='address'
                value={address}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class='form-group'>
              <input
                type='email'
                class='form-control'
                placeholder='Enter Your Email'
                name='email'
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class='form-group'>
              <input
                type='text'
                class='form-control'
                placeholder='Enter Your Mobile Number'
                name='phone'
                value={phone}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class='form-group'>
              <input
                type='text'
                class='form-control'
                placeholder='Enter Your School Name'
                name='school'
                value={school}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class='form-group'>
              <input
                type='text'
                class='form-control'
                placeholder='Enter Your Salary'
                name='salary'
                value={salary}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type='submit' class='btn btn-primary'>
              Update User
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditEmployee;
