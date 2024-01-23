import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddEmployee from "./AddEmployee";
import EmployeeList from "./EmployeeList";
import EditEmployee from "./EditEmployee";
import { EmployeeProvider } from "./CRUDcontext";


function Main() {

    return (
        <>

            <Router>
                <EmployeeProvider>
                    <Routes>
                        <Route path="/" element={<EmployeeList />} />
                        <Route path='/addEmployee' element={<AddEmployee />} />
                        <Route path='/editEmployee/:id' element={<EditEmployee />} />
                    </Routes>
                </EmployeeProvider>
            </Router>
        </>
    )
}
export default Main;