import React from 'react'
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (

    <div className="nav">

      <div className="logo">

        <Link to="/">
          <img id="logoImage" src={require('../data/dtu_logo.jpg')} alt="Dtu logo" />
        </Link>

      </div>
      <a className="navlinks" href="http://dtu.ac.in/" target="_blank" rel="noopener noreferrer">DTU Website</a>
      <a className="navlinks" href="http://hostels.dtu.ac.in/1/" target="_blank" rel="noopener noreferrer">Hostel Website</a>
      <a className="navlinks" href="http://exam.dtu.ac.in/result.htm" target="_blank" rel="noopener noreferrer">Results</a>
      <a className="navlinks" href="https://cumsdtu.in/registration_student/login/login.jsp?courseRegistration" target="_blank" rel="noopener noreferrer">Course Registration</a>
      <a className="navlinks" href="https://cumsdtu.in/student_dtu/login/login.jsp" target="_blank" rel="noopener noreferrer">ERP Login</a>
      <a className="navlinks" href="https://rm.dtu.ac.in/login" target="_blank" rel="noopener noreferrer">DTU RM</a>
      <a className="navlinks" href="http://tnp.dtu.ac.in/" target="_blank" rel="noopener noreferrer">T & P Department</a>
      <Link className="navlinks" to="/team">Meet Our Team</Link>

      


    </div>
    
  )
}

export default Navbar
