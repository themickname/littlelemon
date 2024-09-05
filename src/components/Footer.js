import React from "react";
import logo from "../images/Logo .svg";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt="little lemon" />
        </div>
        <div>
          <h3>Little Lemon Copyright ©</h3>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
