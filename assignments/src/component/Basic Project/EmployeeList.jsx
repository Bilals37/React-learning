import React from 'react'
import './crudStyle.css'

import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { EmpData } from './CRUDcontext'

const EmployeeList = () => {
  const navigate = useNavigate()

  const { employees, deleteEmp } = useContext(EmpData)

  const handleDelete = (id) => {
    deleteEmp(id)
  }

  return (
    <>
      <div className='container'>

        <nav className='navBar' >
          <div className='heading'>
            <h1 style={{ marginLeft: '20px', fontSize: '35px' }}>Employee Details</h1>
          </div>
          <div>
            <button className='addEmployeeBtn btn' onClick={() => navigate('/addEmployee')}>Add Employee</button>
          </div>
        </nav>

        <div className='list'>
          {/* <input type="search" className='search' placeholder='Search' /> */}
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Emp_ID</th>
                <th>Name</th>
                <th>User_Name</th>
                <th>Department</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={employee.id}>
                  <td>{index + 1}</td>
                  <td>{employee.empId}</td>
                  <td>{employee.name}</td>
                  <td>{employee.userName}</td>
                  <td>{employee.department}</td>
                  <td>{employee.role}</td>

                  <td className='actionBtn'>
                    <button className='btn editBtn' onClick={() => navigate(`/editEmployee/${employee.id}`)}>Edit</button>
                    <button className='btn deleteBtn' onClick={() => handleDelete(employee.id)}>Delete</button>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>

      </div>

    </>
  )
}

export default EmployeeList
