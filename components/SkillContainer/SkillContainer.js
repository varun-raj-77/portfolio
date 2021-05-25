import React from 'react';
import {Element} from "react-scroll";
import "./SkillContainer.css";
const SkillContainer = () => {
    return (
        <Element className="skillContainer" id="skills">
        <div className="skillContainer__image">
        <img src={"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80"} />
        </div>
        <div className="skillContainer__text">
            <h2>SKILLSET</h2>
            <div>
                <h5>React Js</h5>
                <h5>Python</h5>
                <h5>HTML and CSS</h5>
                <h5>JavaScript</h5>
            </div>    
        </div>
        </Element>
    )
}

export default SkillContainer
