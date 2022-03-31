import React from "react";
import MailIcon from '@mui/icons-material/Mail';

export default function Footer() {

  const year = new Date().getFullYear()

  return (
  <div className="footer-container">
    <div className="footer-bar">
      <div className="inline-center">Copyright © {year} Blake Chartrand</div>
      <div className="inline-center">Contact: <a className="unstyle" href="mailto:boosterlongstrong@gmail.com"><MailIcon style={{paddingLeft:'0.5rem'}}/></a></div>
    </div>
  </div>)
}
