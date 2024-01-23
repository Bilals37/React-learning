import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { EmpData } from './CRUDcontext'

const AddEmployee = () => {
  const navigate = useNavigate()

  const [empId, setEmpID] = useState('')
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [department, setDepartment] = useState('')
  const [role, setRole] = useState('')

  const { employees, addEmployee } = useContext(EmpData)

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stoppropogation();
    }
    const employee = { id: Date.now(), empId, name, userName, department, role }
    console.log(employee);
    addEmployee(employee);
    navigate('/')
  }




  return (
    <>

      <div className='maincon'>

        <nav className='navBar'>
          <h1 style={{ marginLeft: '20px', fontSize: '35px' }}>Add Employee Details</h1>
        </nav>
        <div className='empCon'>
          <form onSubmit={handleSubmit}>
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
              <button type='submit' className='btn submit'>Submit</button>
              <button type='submit' className='btn back' onClick={() => navigate('/')}>Back</button>
            </div>

          </form>

        </div>
      </div>

    </>
  )
}

export default AddEmployee
