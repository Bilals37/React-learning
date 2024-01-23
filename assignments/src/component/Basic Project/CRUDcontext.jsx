import { createContext, useState } from "react";

export const EmpData = createContext();

export const EmployeeProvider = ({ children }) => {

    const [employees, setEmployee] = useState([])

    const addEmployee = (employee) => {
        setEmployee([...employees, employee])
    }

    const updateEmployee = (id, updateEmployee) => {

        setEmployee(
            employees.map((employee) => employee.id === id ? updateEmployee : employee)
        )
    }

    const deleteEmp = (id) => {
        setEmployee(employees.filter((employee) => employee.id !== id))
    }
    return (
        <>
            <EmpData.Provider value={{ employees, addEmployee, updateEmployee, deleteEmp }}>
                {children}
            </EmpData.Provider>
        </>
    )

}