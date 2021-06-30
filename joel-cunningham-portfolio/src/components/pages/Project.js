import React, { Component } from "react";

import images from '../../assets/images';

const styles = {
  screenshot: {
      height: "300px",
      width: "500px"
  },
};

function Project(props) {

  return (
    <div className="card">
      <div className="img-container">
        <img src={images[props.image]} alt={props.name} style={styles.screenshot}/>
      </div>
      <div className="content">
        <ul>
          <li>
            <strong><a href={props.link}>{props.name}</a></strong>
          </li>
          <li>
            <strong><a href={props.repo}>Git Repository</a></strong>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Project;
