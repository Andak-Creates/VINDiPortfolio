import React from "react";
import { projects } from "./Tools";

const DisplayContent = () => {
  return (
    <div className="content">
      {/* About section */}
      <div id="about" className="section">
        <h4>ABOUT</h4>
        <div className="aboutDeets">
          <p>
            {" "}
            Hi, My name is <span>Kelvin Andak</span>, also known as{" "}
            <span>VindiCodes</span> and I am a certified{" "}
            <span>junior frontend developer</span> with over a year of
            experience in creating and building <span>accessible</span> and{" "}
            <span>pixel perfect websites</span>
          </p>

          <p>
            My main focus is building accessible user interfaces for people. I
            most enjoy building things that look good but are also built well
            under the hood. with time, I plan to start a Youtube channel to
            teach and help people overcome challanges i went through in my first
            year of being a frontend developer.
          </p>

          <p>
            Besides being a Frontend Developer, I also happen to be an upcoming
            Nigerian artist. I go by the stage name <span>ANDAK</span>. I enjoy
            reading books, be it about self development, tech, thriller or
            fantasy. hanging out with friends is also one of my favorite
            activities.
          </p>
        </div>
      </div>

      {/* Experience section */}
      <div id="expo" className="section">
        <h4>EXPERIENCE</h4>
        {projects.map((pro, idx) => (
          <div className="expoCard" key={idx}>
            <div className="when">
              <p>
                {pro.month} - {pro.year}
              </p>
            </div>
            <a href={pro.link} className="expoDeets">
              <h3 className="role">
                {" "}
                {pro.role} • {pro.title}{" "}
                <small>
                  <i className="bi bi-arrow-up-right"></i>
                </small>
              </h3>
              <p>{pro.desc}</p>
              <div className="languageUsed">
                {pro.languages.map((lang, idx) => (
                  <div className="languageUsed">
                    {lang.bootstrap && (
                      <small className="language">{lang.bootstrap}</small>
                    )}
                    {lang.angular && (
                      <small className="language">{lang.angular}</small>
                    )}
                    {lang.html && (
                      <small className="language">{lang.html}</small>
                    )}
                    {lang.css && <small className="language">{lang.css}</small>}
                    {lang.javascript && (
                      <small className="language">{lang.javascript}</small>
                    )}
                    {lang.react && (
                      <small className="language">{lang.react}</small>
                    )}
                  </div>
                ))}
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="endOfExpo">
        <a href="">View Full Résumé</a> <i className="bi bi-arrow-up-right"></i>
      </div>

      <div className="footNote">
        <p>
          this website was created in{" "}
          <span>
            <a href="www.visualstudio.com">Visual Studio Code</a>
          </span>{" "}
          by{" "}
          <span>
            <a href="#">VindiCodes</a>
          </span>
          . Built with React, Html & CSS, deployed with
          <span>
            <a href="vercel.com"> Vercel</a>
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default DisplayContent;
