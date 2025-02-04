import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Signup from "./Signup";
import Home from "./Home";
import Login from "./Login";
import ContactUS from "./Contactus";
import Workersignup from "./Workersignup";
import Workerlogin from './Workerlogin';
import AboutUs from "./AboutUs"
import WorkersPage from "./Workers/Workers"
import Worker from "./Worker"
import ForgotPassword from "./forgotPassword";

function App() {
  return (
    <div class="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Contact" element={<ContactUS />} />
          <Route path="/Workersignup" element={<Workersignup />} />
          <Route path="/Workerlogin" element={<Workerlogin />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Worker" element={<Worker />} />
          <Route path="/services">
          <Route path=":id" element={<WorkersPage/>}></Route>
          </Route>
          <Route path="/forgot" element={<ForgotPassword/>}></Route>
         </Routes>
      </Router>
    </div>
  );
}

export default App;
