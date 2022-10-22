import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
  
    <div>
<header>  

<div className="row section-intro">
  
    <div className="top-bar">
        <a className="menu-toggle" href="#"><span>Menu</span></a>

        <div style="width: 80px;">
          <a href="index.html"></a>
       </div>		      

        <nav id="main-nav-wrap">
             <ul className="main-navigation">
                 <li className="current"><a className="smoothscroll"  href="#intro" title="">Home</a></li>
                 <li><a className="smoothscroll"  href="#about" title="">About</a></li>
                 <li><a className="smoothscroll"  href="#resume" title="">Resume</a></li>
                 <li><a className="smoothscroll"  href="#portfolio" title="">Portfolio</a></li>
                 <li><a className="smoothscroll"  href="#services" title="">Services</a></li>					
                 <li><a className="smoothscroll"  href="#contact" title="">Contact</a></li>			
             </ul>
         </nav>    		
    </div>
    </div>
    </header>
</div>


    );
  }}
