import React from "react";
import Bgfood from "../assets/food.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="aboutcontainermain" style={{ backgroundImage: `url(${Bgfood})` }}>
    <div className='aboutcontainer' >
    <h1 className='abouthead'>About us</h1>
    <p>At ‘FoodZone , we’re tied in with presenting crisp food, regardless of whether it implies going the additional mile. When you stroll through our entryways, we do what we can to make everybody feel comfortable in light of the fact that our family stretches out through your locale.

        ‘Organization Name’ is an organization that is continually developing. From the principal eatery in 1969, we’ve kept on extending’ vision to help other individuals end up effective entrepreneurs by owning an ‘Organization Name’ establishment. We search for franchisees who are focused on quality, not compromising.
        </p>
      
   </div>
   </div>
  );
}

export default About;