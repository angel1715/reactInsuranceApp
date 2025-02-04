
import serviceone from "../assets/basic.jpg";
import servicetwo from "../assets/protection360.jpg";
import servicethree from "../assets/premium.jpg";
import Footer from "./footer";
import Navigation from "./Navigation";
function Services(){
    return(
        <div className="parent-service-container">
        <Navigation />
      
      <div className="service-container">

        <h2 className="text-center services-title">We provide high quality service of protection plans for your device</h2>

        <div className="services-divider1"></div>
        <div className="services row gap-5 bg-light">

        <div className="service1 col-12 col-md-4">
            <p className="text-center service-plan-title plan-title1 text-light">Basic device protection</p>
            <img src={serviceone} className="service-img"></img>
            <p className="service-img-description">Our Basic device protection plan, is our most economic plan that allows you to enroll one device and you can claim up to 3 replacements in a year.</p>
        </div>
        
        <div className="service2 col-12 col-md-4">
        <p className="text-center service-plan-title plan-title2 text-light">Protection 360</p>
        <img src={servicetwo} className="service-img"></img>
        <p className="service-img-description">
            Our Protection 360 plan, is our protection plan that allows you to enroll up to 3 different devices and you can claim up to 5 replacements in a year.
        </p>
        </div>

        <div className="service3 col-12 col-md-4">
        <p className="text-center service-plan-title plan-title3 text-light">Premium care</p>
        <img src={servicethree} className="service-img"></img>
        <p className="service-img-description">
            Our Premium care protection plan, with the Premium care protection plan, you can enroll 5 different devices and claim up to 7 different replacements in a year.
        </p>
        </div>
        
        </div>
        
      </div>
      <Footer />
      </div>
    )
  
}
export default Services