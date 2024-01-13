import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import Home from './home'
import Services from './services'
import Contact from './contact'
import About from './about'
import Sidebar from './Sidebar'
import ListIcon from '@mui/icons-material/List';
import ClassComp from "../compCommunication/ClassComp"
import FunCompo from "../compCommunication/FunCompo"
// import Bike from "../StateInComponent/StateInCompo"
import StatInFun from "../StateInComponent/StateInFunc"
import UseStateHook from "../StateInComponent/UseStateHook"
import ConditionalRendComp from "../ConditionalRendComp/ConditionalRendComp"
// import StylingComp from "../ConditionalRendComp/stylingComp"
// import EventBinding from "../StateInComponent/EventBinding"
// import ApiIntegration from "../compClassLife/Apiclling/APIinte"
import ParentComp from "../CommChild2Pare/ParentComp"
import FunParentComp from "../CommChild2Pare/funParenCompo"


const MainComp = () => {
  let name = "Bilal";
  const emp = {
    name: "Bilal",
    age: 22,
    city: "Shrirampur",
  }
  return (


    <>
      <Router>

        {/* <ul type="none" style={{display:"flex",columnGap:"10px"}}>
                <li> <NavLink to="/"><b>Home</b></NavLink></li>
                <li> <NavLink to="/Services"><b>Services</b></NavLink></li>
                <li> <NavLink to="/Contact"><b>Contact</b></NavLink></li>
                <li> <NavLink to="/About"><b>About</b></NavLink></li>
            </ul> */}



        <nav class="navbar navbar-expand-lg bg-body-tertiary }">
          <div class="container-fluid">
            <NavLink class="navbar-brand" to="/">
              <img src={process.env.PUBLIC_URL + 'logo-shape.png'} alt="" width={70} />
              <b >CodeMind Technology</b>
            </NavLink>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink className="nav-link active" to="/services">
                    Services
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact US
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About US
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/Sidebar">
                    <ListIcon />
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/ClassComp">
                    Class Communication
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/FunCompo">
                    Func Communication
                  </NavLink>
                </li>
                {/* <li class="nav-item">
                  <NavLink className="nav-link" to="/StateInCompo">
                    Class State
                  </NavLink>
                </li> */}
                <li class="nav-item">
                  <NavLink className="nav-link" to="/StateInFunc">
                    Func State
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/UseStateHook">
                    Use Hook
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/Conditional">
                    Conditional
                  </NavLink>
                </li>
                {/* <li class="nav-item">
                  <NavLink className="nav-link" to="/stylingComp">
                    Styling Comp
                  </NavLink>
                </li> */}
                {/* <li class="nav-item">
                  <NavLink className="nav-link" to="/EventBinding">
                    Event Binding
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/ApiCalling">
                    Api Calling
                  </NavLink>
                </li> */}
                <li class="nav-item">
                  <NavLink className="nav-link" to="/CommuChildtoparen">
                    CommuChildtoparen
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/FunCommuChildtoparen">
                    FunCommuChildtoparen
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>




        <Routes>
          <Route exact path="/" element={<Home />}> </Route>
          <Route exact path="/Services" element={<Services />}> </Route>
          <Route exact path="/Contact" element={<Contact />}> </Route>
          <Route exact path="/About" element={<About />}> </Route>
          <Route exact path="/Sidebar" element={<Sidebar />}> </Route>
          <Route exact path="/ClassComp" element={<ClassComp myName={name} company="Codemind" employeobj={emp} />}> </Route>
          <Route exact path="/FunCompo" element={<FunCompo myName={name} company="Codemind" employeobj={emp} />}> </Route>
          {/* <Route exact path="/StateInCompo" element={<Bike />}> </Route> */}
          <Route exact path="/StateInFunc" element={<StatInFun />}> </Route>
          <Route exact path="/UseStateHook" element={<UseStateHook />}> </Route>
          <Route exact path="/Conditional" element={<ConditionalRendComp />}> </Route>
          {/* <Route exact path="/stylingComp" element={<StylingComp />}> </Route> */}
          {/* <Route exact path="/EventBinding" element={<EventBinding />}> </Route>
          <Route exact path="/ApiCalling" element={<ApiIntegration />}> </Route> */}
          <Route exact path="/CommuChildtoparen" element={<ParentComp />}> </Route>
          <Route exact path="/FunCommuChildtoparen" element={<FunParentComp />}> </Route>
        </Routes>
      </Router>
    </>
  )
}

export default MainComp;