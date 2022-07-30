import React from 'react'
import { Link } from "react-router-dom"
import"../Styles/noticespace.css";


const NoticeSpace = () => {
    return (
        <div className="noticespacemenu">
            <Link className="noticespacelink" to="/university">University</Link>
            <Link className="noticespacelink" to="/hostel">Hostel</Link>
        </div>
    )
}
export default NoticeSpace