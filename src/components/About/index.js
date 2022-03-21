import React from 'react'; 
// import images from assets
import myImage from '../../assets/unknown.png';
import { Col } from 'react-bootstrap';


function About() {
    return(
    <section className="title">
      
      <div className="row justify-content-center" id="about-container">       
      <Col lg={6} md={12}>
      <center><img src={myImage} className="my-image" alt="mike-profile"/></center>
      <p class="name">Michael Coleman</p>
      <p class="job">Full stack web developer</p>
      <h2 class="education">A little about me</h2>
        <p>
        Hello, I'm Michael! I switched my gears from my education in Business to take on Web Development to keep challenging myself in ways I thought I never could. 
        Web Development allows me to continually create and creatively find new ways to make processes better. I always believed that anything can be improved and 
        there are different ways to solve problems.
         </p>
      </Col>

      </div>
    </section> 
)}
  
export default About;