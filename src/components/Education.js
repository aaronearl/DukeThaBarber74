import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Appointments</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      {/* <div className="row item">
        <div className="twelve columns">
          <h3>University of Life</h3>
          <p className="info">
            Master in Graphic Design
            <span>&bull;</span>
            <em className="date">April 2007</em>
          </p>
        </div>
      </div> */}

      <div className="row item">
        <div className="twelve columns">
          {/* <h3>Our Assignment</h3> */}
          <p className="info">
            <h4>
              "Call, text (310-612-4469) or email to make an appointment
            </h4>
            <span>&bull;</span></p>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
