import React, { Component} from 'react'





export default class Services extends Component {
    componentDidMount() {
      
        const script = document.createElement("script");
        const script2 = document.createElement("script");
        const script3 = document.createElement("script");
        script.sync = true;
        script2.sync = true;
        script3.sync = true;
        script.src = "js/jquery-2.1.3.min.js";
        script2.src = "js/plugins.js";
        script3.src = "js/main.js";
        // For body
        document.head.appendChild(script);
        document.head.appendChild(script2);
        document.head.appendChild(script3);
      }

       render() {

    return (
      
    
        <div> 
<section id="services">

		<div className="overlay"></div>

		<div className="row section-intro">
   		<div className="col-twelve">

   			<h5>Services</h5>
   			<h1>What Can I Do For You?</h1>

   			
   		</div>   		
   	</div> 

   	<div className="row services-content">

   		<div id="owl-slider" className="owl-carousel services-list">

	      	<div className="service">	

	      		<span className="icon"><i className="icon-earth"></i></span>            

	            <div className="service-content">	

	            	 <h3>Webdesign</h3>

		          
	         		
	         	</div> 	         	 

				</div>

				<div className="service">	

					<span className="icon"><i className="icon-window"></i></span>                          

	            <div className="service-content">	

	            	<h3>Web Development</h3>  

		           

	            </div>	                          

			   </div> 

			   <div className="service">

			   	<span className="icon"><i className="icon-mobile"></i></span>		            

	            <div className="service-content">

	            	<h3>Mobile Application</h3>


	            </div> 	            	               

			   </div> 

				<div className="service">

					<span className="icon"><i className="icon-toggles"></i></span>	              

	            <div className="service-content">

	            	<h3>UI/UX Design</h3>

		          
	         		
	            </div>                

				</div>

			   <div className="service">

			   	<span className="icon"><i className="icon-image"></i></span>	            

	            <div className="service-content">

	            	<h3>Graphics Design</h3>

		          

	            </div>	               

			   </div> 

			   <div className="service">

			   	<span className="icon"><i className="icon-chat"></i></span>	   	           

	            <div className="service-content">

	            	 <h3>Consultancy</h3>

		           
	            </div>	               

			   </div> 

	      </div> 
   		
   	</div> 

	</section> 	

</div>
)
}
}
