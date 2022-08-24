import React from "react";
// import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>King Duke</h2>
        <h4>
          <p>
            You may get dressed daily, rather it be casual or formal. You will still never be complete without great hair. I am Duke tha Barber, I may not be the best but my name will be mentioned. Years of experience combined with love and adoration for the craft I am here to make your hair needs a beautiful reality.
            Inquire within and make your next hair choice your best hair choice.  I Specialize in quality fades, Afros, tapers, Mohawk’s and designs, crisp line ups and shaves.Book and get hooked.Need a cut?Get a cut!" </p>

        </h4>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9HlV-KlUb_c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <h3>
              <p className="address">
                <span>Duke Tha Barber</span>
                <br />
                <span>By appointment</span>
                <p>310-612-4469</p>
                <p>Los Angeles, CA 90044</p>
                <br />
                {/* <span>(323) 816-6163</span> */}
                <br />
              </p>
            </h3>
          </div>
          {/* <div className="columns download">
            <p>
              <a href="candacecollins.pdf" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  </section>
);

export default About;
