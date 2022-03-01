import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Payment Partner</h4>
        <img src="" alt="" />
      </div>

      <div className="midFooter">
        <h1>Ultimed</h1>
        <p>Meds for everyone</p>

        <p>Copyrights 2021 &copy; ultimed</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/abhishek_xx1">Instagram</a>
        <a href="http://youtube.com">Youtube</a>
        <a href="http://facebook.com">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
