import React from 'react'
import { Link } from "react-router-dom"
import "../Styles/noticespace.css";

const Resultspace = () => {
  return (
      <div className="noticespacemenu">
          <Link className="noticespacelink" to="/2019result">2019</Link>
          <Link className="noticespacelink" to="/2020result">2020</Link>
          <Link className="noticespacelink" to="/2021result">2021</Link>
          <Link className="noticespacelink" to="/2022result">2022</Link>
      </div>
  )
}

export default Resultspace
