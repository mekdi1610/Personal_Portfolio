import React, { Component } from 'react'

export default class Intro extends Component {
render() {

    return(
        <div>
<section id="intro">   

<div class="intro-overlay"></div>	

<div class="intro-content">
    <div class="row">

        <div class="col-twelve">

            <h5>Hello, World.</h5>
            <h1>I'm Mekdelawit Mamushet.</h1>

            <p class="intro-position">
                <span>Software Developer/Engineer</span>
                <span></span> 
            </p>

            <a class="button stroke smoothscroll" href="#about" title="">More About Me</a>

        </div>  
        
    </div>   		 		
</div>

<ul class="intro-social">        
  <li><a href="https://www.facebook.com/mekdelawitmam"><i class="fa fa-facebook"></i></a></li>
  <li><a href="https://github.com/mekdi1610"><i class="fa fa-github"></i></a></li>
  <li><a href="https://www.linkedin.com/in/mekdelawit-mamushet-101141199"><i class="fa fa-linkedin"></i></a></li>
  <li><a href="https://www.instagram.com/mekdi_md/"><i class="fa fa-instagram"></i></a></li>
</ul>  	

</section> 
</div>
    )
}
}
