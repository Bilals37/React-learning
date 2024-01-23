import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useContext } from 'react'
import { EmpData } from './CRUDcontext'

const EditEmployee = () => {
  const navigate = useNavigate()
  const [empId, setEmpID] = useState('')
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [department, setDepartment] = useState('')
  const [role, setRole] = useState('')

  const { employees, updateEmployee } = useContext(EmpData)

  const { id } = useParams()


  useEffect(() => {
    const employee = employees.find(emp => emp.id === parseInt(id))
    if (employee) {
      setEmpID(employee.empId)
      setName(employee.name)
      setUserName(employee.userName)
      setDepartment(employee.department)
      setRole(employee.role)
    }
  }, [id, employees])

  const handleUpdate = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    const updatedEmployee = { id: parseInt(id), empId, name, userName, department, role };
    console.log(updatedEmployee);
    updateEmployee(parseInt(id), updatedEmployee);
    navigate('/');
  }

  return (
    <div className='maincon'>

      <nav className='navBar'>
        <h1 style={{ marginLeft: '20px', fontSize: '35px' }}>Edit Employee Details</h1>
      </nav>


      <div className='empCon'>
        <form onSubmit={handleUpdate}>
          <input type="number" placeholder='Emp_id' value={empId} onChange={(e) => {
            setEmpID(e.target.value)
          }} />
          <input type="text" placeholder='Name' value={name} onChange={(e) => {
            setName(e.target.value)
          }} />
          <input type="text" placeholder='User_Name' value={userName} onChange={(e) => {
            setUserName(e.target.value)
          }} />
          <input type="text" placeholder='Department' value={department} onChange={(e) => {
            setDepartment(e.target.value)
          }} />
          <input type="text" placeholder='Role' value={role} onChange={(e) => {
            setRole(e.target.value)
          }} />
          <div className='editButton'>
            <button type='submit' className='btn editBtn'>Update</button>
            <button type='submit' className='btn deleteBtn' onClick={() => navigate('/')}>Back</button>
          </div>

        </form>

      </div>
    </div>
  )
}

export default EditEmployee
