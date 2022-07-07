import React from 'react';
import passwordGenerator from '../../assets/images/passwordgenerator.png';
import pitchcatch from '../../assets/images/pitch.catch.png';
import readmegenerator from '../../assets/images/readmegenerator.png';
import refactor from '../../assets/images/refactor.jpg';
import routemyday from '../../assets/images/routemyday.jpeg';
import dayplanner from '../../assets/images/dayplanner.jpg';
import AOS from "aos";
import "aos/dist/aos.css";
// import { getDefaultNormalizer } from '@testing-library/dom';


function Portfolio(props) {
    AOS.init();

    return(
        <div className="container m-auto shadow-lg" id="portfolio">
        <div>
            <div className="row justify-content-center">
                <h2>My Projects</h2>
            </div>
            <div className="row justify-content-center">
                <p>Click on the images to be taken to the deployed application or you can click Github links below the images for the code.
                </p>
            </div>
            <div className="row justify-content-center">
                <div className="col-6 p-2">
                    <div className="p-2" data-aos="fade-right" data-aos-duration="3000">
                        <h3>Password Generator</h3>
                        <a href="https://timmcmullan.github.io/PasswordGenerator/" target="_blank">
                            <img id= "fifty" src={passwordGenerator} style={{ width: "80%" }} alt="Password Generator" /></a>
                        <p>Never stress over password creation again</p>
                        <p className="github"><a href="https://timmcmullan.github.io/PasswordGenerator" target="_blank">Github</a></p>
                    </div>
                    <div className="p-2" data-aos="fade-right" data-aos-duration="3000">
                        <h3>Pitchcatch</h3>
                        <a href="https://JosephLMurray.github.io/rookies" target="_blank">
                            <img id="fifty" src={pitchcatch} style={{ width: "80%" }} alt="Pitch.Catch" /></a>
                        <p>A Group Project: Create the ultimate Fantasy Baseball Team !!</p>
                        <p className="github"><a href="https://JosephLMurray.github.io/rookies" target="_blank">Github</a></p>
                    </div>
                    <div className="p-2" data-aos="fade-right" data-aos-duration="3000">
                        <h3>ReadMe Generator</h3>
                        <a href="https://timmcmullan.github.io/HW_09_README_Generator/" target="_blank">
                            <img id="twentyFive" src={readmegenerator} style={{ width: "80%" }} alt="ReadMe Generator" /></a>
                        <div>
                            <p>Easily create your ReadMe markdown file</p>
                            <p className="github"><a href="https://timmcmullan.github.io/HW_09_README_Generator/" target="_blank">Github</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-6 p-2">
                    <div className="p-2" data-aos="fade-left" data-aos-duration="3000">
                        <h3>Refactor</h3>
                        <a href="https://timmcmullan.github.io/HW_01_Code_Refactor/" target="_blank">
                            <img id="fifty" src={refactor} style={{ width: "80%" }} alt="Weather Hub" /></a>
                        <p>Make your site better !!</p>
                        <p className="github"><a href="https://timmcmullan.github.io/HW_01_Code_Refactor/" target="_blank">Github</a></p>
                    </div>
                    <div className="p-2" data-aos="fade-left" data-aos-duration="3000">
                        <h3>Route My Day</h3>
                        <a href="https://odisclemons.github.io/route-my-day/" target="_blank">
                            <img id="twentyFive" src={routemyday} style={{ width: "80%", height: "50%" }} alt="Route My Day" /></a>
                        <div>
                            <p>Everything you want to do today, routed for your convenience</p>
                            <p className="github"><a href="https://odisclemons.github.io/route-my-day/" target="_blank">Github</a></p>
                        </div>
                    </div>
                    <div className="p-2" data-aos="fade-left" data-aos-duration="3000">
                        <h3>Day Planner</h3>
                        <a href="https://timmcmullan.github.io/HW_05_day_planner/n" target="_blank">
                            <img id="fifty" src={dayplanner} style={{ width: "80%" }} alt="Day Planner"/></a>
                        <p>Your tasks, organized and in one place</p>
                        <p className="github"><a href="https://timmcmullan.github.io/HW_05_day_planner/" target="_blank">Github</a></p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Portfolio;
