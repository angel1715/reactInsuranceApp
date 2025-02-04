
import Navigation from "./Navigation";
import aboutim1 from "../assets/aboutimg1.jpg";
import aboutimg2 from "../assets/grandpa.jpg";
function About(){

    return(
       
        <div className="about-container">
         <Navigation />

         <h2 className="about-title text-center">who we are</h2>
         <div className="about-title-divider"></div>
         <div className="about-img1-container row">
         <img src={aboutim1} className="about-img1 col-6"></img>
         <p className="img1-title col-6">We are an insurance service provider company <br></br>committed to provide high quality coverage for<br></br> your device, whether it is a smart-phone, tablet or smart-watch</p>
         </div>
         
         <div className="about-img2-container row">
           
           <img src={aboutimg2} className="about-img2 col-6"></img>
         </div>
        </div>
    )
}
export default About