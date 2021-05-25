import React from 'react';
import { Element } from "react-scroll";
import Project from '../Project/Project';
import "./ProjectContainer.css"

const ProjectContainer = () => {

    const projects = [
        {
            img:"https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg",
            title:"MY PROJECTS",
            desc:"These are some of the projects i have created",
            link:"https://varun-html-css.netlify.app/"
        },
    ];

    return (
        <Element className="projectContainer" id="projects">
            <h1>Projects</h1>
            <p>
                Here are some of the projects i created.
            </p>
            <div className="projectContainer__projects">
              {projects.map((project, index) => {
                  return(
                      <Project
                        key={index}
                        img={project.img}
                        title={project.title}
                        desc={project.desc}
                        link={project.link}
                       /> 
                  );
              } )}
            </div> 
        </Element>
    )
}

export default ProjectContainer
