
import React from 'react';
import profile from '../../assets/images/tim.jpg';

function About() {
    return(
        <div className="container-fluid">
            <div className="container shadow-lg" id="about">
                <div className="row mb-5 rounded">
                    <div className="col-sm-4 p-4 m-auto aboutText">
                        <h2 className="text-center">About Me</h2>
                        <p>Born and raised in Florida, my only residence outside the state came during military service.  After serving, where I was also able to finish a 4-year degree, I returned to Florida where all four of my children have graduated high school and two are currently attending college.  An interest in web design and information flow led me to an interest in Full Stack Web Development.  That has grown into a passion to create and improve.
                        </p>
                    </div>
                    <div className="col-sm-4 m-auto">
                        <img src={profile} alt='banner' className="aboutImg"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;