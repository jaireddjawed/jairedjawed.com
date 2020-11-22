import React from 'react';

function Resume({ data: { education, work } }) {
  return (
    <section id="resume">
       <div className="row education">
        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
               {education.map(({ school, degree, graduated }, i) => (
                  <div key={String(i)}>
                    <h3>{school}</h3>
                    <p className="info">{degree} <span>&bull;</span><em className="date">{graduated}</em></p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row work">

        <div className="three columns header-col">
          <h1><span>Experience</span></h1>
        </div>

        <div className="nine columns main-col">
          {work.map(({ company, title, years, details }, i) => (
            <div key={String(i)}>
              <h3>{company}</h3>
              <p className="info">{title}<span>&bull;</span><em className="date">{years}</em></p>
              <ul className="work-details">
                {details.map(detail => <li key={detail}>{detail}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
