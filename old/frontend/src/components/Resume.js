import React from "react";

function Education({ education }) {
  return (
    <div className="row education">
      <div className="three columns header-col">
        <h1>
          <span>Education</span>
        </h1>
      </div>

      <div className="nine columns main-col">
        <div className="row item">
          <div className="twelve columns">
            {education.map(({ school, degree, graduated }, i) => (
              <div key={String(i)}>
                <h3>{school}</h3>
                <p className="info">
                  {degree} <span>&bull;</span>
                  <em className="date">{graduated}</em>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Experience({ work }) {
  return (
    <div className="row work">
      <div className="three columns header-col">
        <h1>
          <span>Experience</span>
        </h1>
      </div>

      <div className="nine columns main-col">
        {work.map(({ company, title, years, details }, i) => (
          <div key={String(i)}>
            <h3 className="company">{company}</h3>
            <p className="info">
              <strong>{title}</strong>
              <span>&bull;</span>
              <em className="date">{years}</em>
            </p>
            <ul className="work-details">
              {details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function Resume({ data: { education, work } }) {
  return (
    <section id="resume">
      <Experience work={work} />
      <Education education={education} />
    </section>
  );
}

export default Resume;
