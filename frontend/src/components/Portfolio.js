import React from 'react';

function Portfolio({ data }) {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Portfolio</h1>

          <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-thirds cf">
            {data.projects.map(project => (
              <div key={project.title} className="six columns portfolio-item">
                <div className="item-wrap">
                  <div className="card">
                    <a href={project.url} title={project.title}>
                      <img alt={project.title} src={`/images/${project.image}`} />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{project.title}</h5>
                          <p>{project.category}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
