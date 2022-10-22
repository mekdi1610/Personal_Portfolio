import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
        <div>
<section id="about">  

<div className="row section-intro">
    <div className="col-twelve">

        <h5>About</h5>
        <h1>Let me introduce myself.</h1>

        <div className="intro-info">

            <img src="images/me3.jpg" alt="Profile Picture" />

            <p className="lead">My name is Mekdelawit Mamushet, I recently graduated from HiLCoE School of Computer Science. Through my journey in this field
                I have been playing around with various frameworks and programming languages so I am familar with the basics and advanced my self in certain areas, please browse more to learn about me.
            </p>
        </div>   			

    </div>   		
</div> 

<div className="row about-content">

    <div className="col-six tab-full">

        <h3>Profile</h3>
        <p>Dedicated and motivated software developer, with a background in designing and developing web and mobile
         applications, furthermore customizing existing applications. </p>

        <ul className="info-list">
            <li>
                <strong>Fullname:</strong>
                <span>Mekdelawit Mamushet</span>
            </li>
            <li>
                <strong>Birth Date:</strong>
                <span>January 28, 1998</span>
            </li>
            <li>
                <strong>Job:</strong>
                <span>Freelancer, Software Developer/ Engineer</span>
            </li>
            <li>
                <strong>Website:</strong>
                <span>www.kardswebsite.com</span>
            </li>
            <li>
                <strong>Email:</strong>
                <span>mekdi1610@gmail.com</span>
            </li>

        </ul> 

    </div>

    <div className="col-six tab-full">

        <h3>Skills</h3>
        <p>Demonstrated experience in the software
         development lifecycle, agile software development, and test-driven development. Core technical skills include
         Java, PHP, C# Python, Javascript, SQL, MySQL MongoDB, etc. Besides coding, skilled at collaborating with
         cross-functional teams, and internal and external partners to deliver a product.</p>

         <ul className="skill-bars">
            <li>
                <div className="progress percent90"><span>90%</span></div>
                <strong>Angular JS</strong>
            </li>
            <li>
                <div className="progress percent85"><span>85%</span></div>
                <strong>Vue JS</strong>
            </li>
            <li>
                <div className="progress percent90"><span>90%</span></div>
                <strong>Laravel</strong>
            </li>
            <li>
                <div className="progress percent70"><span>70%</span></div>
                <strong>Node Js</strong>
            </li>
            <li>

                <div className="progress percent75"><span>75%</span></div>
                <strong>MongoDB</strong>
            </li>

         </ul>

    </div>

</div>

<div className="row button-section">
    <div className="col-twelve">
        <a href="#contact" title="Hire Me" className="button stroke smoothscroll">Hire Me</a>
        <a href="file:///home/mekdi/Documents/Portfolio/kards-master/cv/MekdelawitMamushet.pdf" title="Download CV" className="button button-primary" download>Download CV</a>
    </div>   		
</div>

</section>
</div>
)
}
}
