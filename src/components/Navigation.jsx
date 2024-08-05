import React, { useState } from "react";
import { projects } from "./Tools";
const Navigation = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 450) {
      setExpStatus(true);
      setAboutStatus(false);
    } else if (window.scrollY < 450) {
      setAboutStatus(true);
      setExpStatus(false);
    }
  });

  const toAbout = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toExp = () => {
    window.scrollTo({
      top: window.innerWidth < 1000 ? 700 : 555,
      behavior: "smooth",
    });
  };

  const [isAboutActive, setAboutStatus] = useState(true);
  const [isExpActive, setExpStatus] = useState(false);

  return (
    <div className="navigate">
      <div className="desc">
        <h1>Kelvin Andak</h1>
        <h2>Mid-Level Front End Developer</h2>
        <small>VindiCodes</small>
        <p>
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
      </div>

      {/* Links */}
      <div className="links">
        <a
          className={
            isAboutActive ? "theLink aboutLink activeLink" : " theLink"
          }
          onClick={toAbout}
        >
          ABOUT
        </a>
        <a
          className={isExpActive ? "theLink expLink activeLink" : " theLink"}
          onClick={toExp}
        >
          EXPERIENCE
        </a>
        {/* <a className="theLink proLink" href="">
          PROJECTS
        </a>  this section is currently not available*/}
      </div>

      {/* Footer links */}
      <div className="footLinks">
        <a href="https://github.com/Andak-Creates">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://www.instagram.com/vindicode.tech?igsh=ZTdzZjllemZuaWcx&utm_source=qr">
          <i className="bi bi-instagram"></i>
        </a>

        <a href="mailto:kelvinandak@gmail.com?subject=Hello%20Kelvin&body=I%20am%20interested%20in%20your%20services.">
          <i className="bi bi-envelope"></i>
        </a>

        <a href="tel:08101432389">
          <i class="bi bi-telephone"></i>
        </a>
      </div>
    </div>
  );
};

export default Navigation;
