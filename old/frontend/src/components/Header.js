import React from "react";
import ParticlesBg from "particles-bg";

function Navigation() {
  return (
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a className="mobile-btn" href="#home" title="Hide navigation">
        Hide navigation
      </a>
      <ul id="nav" className="nav">
        <li>
          <a className="smoothscroll" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#resume">
            Resume
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#contact">
            Contact
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://tutoring.jairedjawed.com"
          >
            Tutoring
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://jawed-tutoring.notion.site/Blog-13ebe152fae0809484b1e4c8561cbb01"
          >
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
}

function Social({ data }) {
  return (
    <ul className="social">
      <li>
        <a href={data.resumedownload} className="button btn project-btn">
          <i className="fa fa-download" /> Resume
        </a>
      </li>
      <li>
        <a
          href="https://github.com/jaireddjawed"
          className="button btn github-btn"
        >
          <i className="fa fa-github" /> Github
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/jaired/"
          className="button btn linkedin-btn"
        >
          <i className="fa fa-linkedin" /> LinkedIn
        </a>
      </li>
    </ul>
  );
}

function Header({ data }) {
  return (
    <header id="home">
      <ParticlesBg bg={true} type="polygon" />
      <Navigation />

      <div className="row banner">
        <div className="pill">
          Tutoring service resumes on <strong>Jan 6, 2025</strong>. Reserve a
          tutoring session in advance{" "}
          <a href="https://tutoring.jairedjawed.com">here</a>.
        </div>
        <div className="banner-text">
          <h1 className="responsive-headline">{data.name}</h1>
          <h3>{data.bio}</h3>
          <hr />
          <Social data={data} />
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle" />
        </a>
      </p>
    </header>
  );
}

export default Header;
