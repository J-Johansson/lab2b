import React, { Component } from "react";
import portfolio from "./experience.json";
import portfolio2 from "./utbildning.json";
const Experience = () => {

  return (
    <div>
      <h1>Tidigare erfarenheter</h1>
      <ul>
        {portfolio.map((record, i) => (
          <li key={i}>
            <li>{record.namn}</li>
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
            <ul>
              <li key={record.datum}>{record.datum}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;