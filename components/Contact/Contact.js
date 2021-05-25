import React from 'react'
import { Element } from "react-scroll";
import "./Contact.css"

const Contact = () => {
    return (
        <Element className="contact" id="contact">
            <h1>Contact</h1>
            <div className="contact__container">
                <p>
                    Email : <span>varunraj2117@gmail.com</span>
                </p>
                <p>
                    Github Username : <span>@varun-raj-77</span>
                </p>
            </div>
        </Element>
    )
}

export default Contact
