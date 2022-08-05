import React from "react";
import { Link } from "react-router-dom";
import "../Styles/noticespace.css";

const NoticeSpace = ({ subCategories }) => {
  console.log(subCategories);
  return (
    <div className="noticespacemenu">
      {Object.entries(subCategories).map(([key, value]) => {
        return (
            <Link className="noticespacelink" to={"/"+key}>{key}</Link>
        );
      })}
    </div>
  );
};
export default NoticeSpace;
