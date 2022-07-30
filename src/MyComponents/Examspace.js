import React from 'react'
import { Link } from "react-router-dom"
import "../Styles/noticespace.css";

const Examspace = () => {
  return (
      <div className="noticespacemenu">
          <Link className="noticespacelink" to="/coeexam">COE</Link>
          <Link className="noticespacelink" to="/itexam">IT</Link>
          <Link className="noticespacelink" to="/seexam">SE</Link>
          <Link className="noticespacelink" to="/mceexam">MCE</Link>
          <Link className="noticespacelink" to="/eceexam">ECE</Link>
          <Link className="noticespacelink" to="/eeexam">EE</Link>
          <Link className="noticespacelink" to="/meexam">ME</Link>
          <Link className="noticespacelink" to="/peexam">PE</Link>
          <Link className="noticespacelink" to="/maeexam">MAE</Link>
          <Link className="noticespacelink" to="/civilexam">CIVIL</Link>
          <Link className="noticespacelink" to="/chemicalexam">CHEMICAL</Link>
          <Link className="noticespacelink" to="/pctexam">PCT</Link>
          <Link className="noticespacelink" to="/epexam">EP</Link>
          <Link className="noticespacelink" to="/eneexam">ENE</Link>
          <Link className="noticespacelink" to="/btexam">BT</Link>
      </div>
  )
}

export default Examspace
