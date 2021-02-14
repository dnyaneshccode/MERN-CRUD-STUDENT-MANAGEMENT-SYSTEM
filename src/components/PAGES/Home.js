import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from '../employees/Pagination';

const Home = () => {
  const [employee, setemployee] = useState([]);
  const [loading, setloading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(10)


  useEffect(() => {
    loadEmploy();
  }, []);

  const loadEmploy = async () => {
    setloading(true);
    const result = await axios.get('http://localhost:5000/employee/add', employee);
    setemployee(result.data.reverse());
  };

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexofFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = employee.slice(indexofFirstPost, indexOfLastPost)


  // change posts.
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // Delete the user.
  const deleteEmployee = async id =>{
    await axios.delete(`http://localhost:5000/employee/${id}`)
    loadEmploy();
  }
  return (
    <>
      <div className='container'>
        <div className='py-4'>
          <table class='table border shadow'>
            <thead class='thead-dark'>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>FirstName</th>
                <th scope='col'>LastName</th>
                <th scope='col'>Address</th>
                <th scope='col'>Email</th>
                <th scope='col'>Phone</th>
                <th scope='col'>School</th>
                <th scope='col'>Salary</th>
                <th scope='col'>{'  '}C R U D</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((employee, index) => (
                <tr>
                  <th scope='row'>{index + 1}</th>
                  <td>{employee.firstname}</td>
                  <td>{employee.lastname}</td>
                  <td>{employee.address}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.school}</td>
                  <td>{employee.salary}</td>
                  <td>
                    <Link
                      className='btn btn-primary mr-2'
                      to={`/employee/${employee._id}`}
                    >
                      View
                    </Link>
                    <Link
                      className='btn btn-outline-primary mr-2'
                      to={`/employee/edit/${employee._id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      className='btn btn-danger  mr-2'
                      onClick={() => deleteEmployee(employee._id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
          <Pagination postsPerPage={postsPerPage} totalPosts={employee.length} paginate={paginate}/>
      </div>
    </>
  );
};

export default Home;

// import React from 'react'
// import {Box, Typography} from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// const Home = () => {
//     const useStyles = makeStyles({
//         table: {
//           minWidth: 650,
//         },
//       });

//       function createData(name, calories, fat, carbs, protein) {
//         return { name, calories, fat, carbs, protein };
//       }

//       const rows = [
//         createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//         createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//         createData('Eclair', 262, 16.0, 24, 6.0),
//         createData('Cupcake', 305, 3.7, 67, 4.3),
//         createData('Gingerbread', 356, 16.0, 49, 3.9),
//       ];

//      const classes = useStyles();

//     return (
//         <TableContainer component={Paper}>
//           <Table className={classes.table} aria-label="simple table">
//             <TableHead>
//               <TableRow>
//                 <TableCell>Employees</TableCell>
//                 <TableCell align="right">Firstname</TableCell>
//                 <TableCell align="right">Lastname</TableCell>
//                 <TableCell align="right">Address</TableCell>
//                 <TableCell align="right">Email</TableCell>
//                 <TableCell align="right">Phone</TableCell>
//                 <TableCell align="right">School</TableCell>
//                 <TableCell align="right">Salary</TableCell>
//                 <TableCell align="right"></TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rows.map((row) => (
//                 <TableRow key={row.name}>
//                   <TableCell component="th" scope="row">
//                     {row.name}
//                   </TableCell>
//                   <TableCell align="right">{row.calories}</TableCell>
//                   <TableCell align="right">{row.fat}</TableCell>
//                   <TableCell align="right">{row.carbs}</TableCell>
//                   <TableCell align="right">{row.protein}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       );
//     }

// export default Home
