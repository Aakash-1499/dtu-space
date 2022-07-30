import React from 'react'
import { Link } from "react-router-dom"
import "../Styles/noticespace.css";

const Internspace = () => {
  return (
        <div className="noticespacemenu">
              <Link className="noticespacelink" to="/intern">Intern</Link>
              <Link className="noticespacelink" to="/placement">Placement</Link>
        </div>
      
  )
}

export default Internspace
