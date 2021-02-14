import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddEmployee = () => {
  const history = useHistory();
  const [employee, setemployee] = useState({
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
  } = employee;
  const onInputChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setemployee({ ...employee, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post(
      'http://localhost:5000/employee',
      employee,
    );
    console.log(data);
    history.push('/');
  };

  return (
    <>
      <div className='container'>
        <div className='w-75 mx-auto shadow p-5'>
          <h2 className='text-center mb-4'>Add A User</h2>
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
              submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
