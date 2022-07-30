import React from 'react'
import { Link } from "react-router-dom"
import "../Styles/noticespace.css";

const Studyspace = () => {
  return (
      <div className="noticespacemenu">
          <Link className="noticespacelink" to="/coe">COE</Link>
          <Link className="noticespacelink" to="/it">IT</Link>
          <Link className="noticespacelink" to="/se">SE</Link>
          <Link className="noticespacelink" to="/mce">MCE</Link>
          <Link className="noticespacelink" to="/ece">ECE</Link>
          <Link className="noticespacelink" to="/ee">EE</Link>
          <Link className="noticespacelink" to="/me">ME</Link>
          <Link className="noticespacelink" to="/pe">PE</Link>
          <Link className="noticespacelink" to="/mae">MAE</Link>
          <Link className="noticespacelink" to="/civil">CIVIL</Link>
          <Link className="noticespacelink" to="/chemical">CHEMICAL</Link>
          <Link className="noticespacelink" to="/pct">PCT</Link>
          <Link className="noticespacelink" to="/ep">EP</Link>
          <Link className="noticespacelink" to="/ene">ENE</Link>
          <Link className="noticespacelink" to="/bt">BT</Link>
      </div>
  )
}

export default Studyspace
