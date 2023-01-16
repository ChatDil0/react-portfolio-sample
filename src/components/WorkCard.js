import "./WorkCardStyles.css";

import React from 'react';

import { NavLink } from "react-router-dom";

function WorkCard(props) {
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt="projects"/>
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns">
                <NavLink to={props.view} className="btn">View</NavLink>
                <NavLink to={props.source} className="btn btn-light">Source</NavLink>
            </div>
        </div>
    </div>
  );
};

export default WorkCard;