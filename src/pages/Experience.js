import React, { Component } from "react";
import portfolio from "./experience.json";
import portfolio2 from "./utbildning.json";
const Experience = () => {

  return (
    <div className="container">
    <div>
      <h1>Tidigare erfarenheter</h1>
      <ul>
        {portfolio.map((record, i) => (
          <li key={i}>
            <li className="top_name">{record.namn}</li>
            <ul>
              <li key={record.titel}>{record.titel}</li>
              <li key={record.datum}>{record.datum}</li>
              <li key={record.information}>{record.information}</li>
            </ul>
          </li>
        ))}
      </ul>
      <h3>Språk och Utbildningar</h3>
      <ul>
        {portfolio2.map((record, i) => (
          <li key={i}>
            <li>{record.namn}</li>
          </li>
        ))}
      </ul>
    </div>

    <footer>
    <div class="footer-social-links">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <a href="https://www.facebook.com/jonathan.johansson.7524" title="Facebook" target="_blank"><i class="fa fa-facebook"></i></a>
        <a href="https://twitter.com/SuspectVM" title="Twitter" target="_blank"><i class="fa fa-twitter"></i></a>
        <a href="#" title="LinkedIn+" target="_blank"><i class="fa fa-linkedin"></i></a>
        <a href="https://github.com/J-Johansson" title="Github" target="_blank"><i class="fa fa-github"></i></a>
      </div>
      <p id="copyright">
        Copyright &copy; 2022 by JJ.
    </p>
    </footer>
    </div>
  );
};

export default Experience;