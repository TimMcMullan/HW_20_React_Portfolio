import React from 'react';
import {FaFacebook} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"
import {FaGithubSquare} from "react-icons/fa";
import {IconContext} from "react-icons"

function Footer() {
    return(
        <nav className="footer">
            <IconContext.Provider value={{ style: {fontSize: '80px', padding: "15px", color: "var(--fourth)"}}}>
                <div className="navbar-brand footer" target="_blank">
                    <a href="https://www.facebook.com/mcmullant">
                        <FaFacebook />
                    </a>
                    <a href="https://www.linkedin.com/in/tim-mcmullan-a399b58/" target="_blank">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://github.com/TimMcMullan" target="_blank">
                        <FaGithubSquare />
                    </a>
                </div>
            </IconContext.Provider>
        </nav>
    )
}

export default Footer;