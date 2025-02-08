import Navigation from "./Navigation";
import aboutim1 from "../assets/aboutimg1.jpg";
import serviceone from "../assets/basic.jpg";
import servicetwo from "../assets/protection360.jpg";
import servicethree from "../assets/premium.jpg";
import Footer from "./footer";
import {motion} from "motion/react";
function About() {
  return (
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 1 } }} className="about-container">
      <Navigation />

      <h2 className="about-title text-center">who we are</h2>
      <div className="about-title-divider"></div>
      <div className="about-img1-container row">
        <img src={aboutim1} className="about-img1 col-16 col-md-6"></img>
        <p className="img1-title col-12 col-md-6">
          We are an insurance service provider company <br></br>committed to
          provide high quality coverage for<br></br> your device, whether it is
          a smart-phone, tablet or smart-watch
        </p>
      </div>

      <div className="about-divider"></div>
      <div className="about-img2-container row">
        <h2 className="text-center about-second-title">
          We offer different plans for you
        </h2>

        <div className="service1 col-12 col-md-4 mb-5">
          <p className="text-center service-plan-title plan-title1 text-light">
            Basic device protection
          </p>
          <img src={serviceone} className="service-img"></img>
          <p className="service-img-description">
            Our Basic device protection plan, is our most economic plan that
            allows you to enroll one device and you can claim up to 3
            replacements in a year.
          </p>
        </div>

        <div className="service2 col-12 col-md-4 mb-5">
          <p className="text-center service-plan-title plan-title2 text-light">
            Protection 360
          </p>
          <img src={servicetwo} className="service-img"></img>
          <p className="service-img-description">
            Our Protection 360 plan, is our protection plan that allows you to
            enroll up to 3 different devices and you can claim up to 5
            replacements in a year.
          </p>
        </div>

        <div className="service3 col-12 col-md-4 mb-5">
          <p className="text-center service-plan-title plan-title3 text-light">
            Premium care
          </p>
          <img src={servicethree} className="service-img"></img>
          <p className="service-img-description">
            Our Premium care protection plan, with the Premium care protection
            plan, you can enroll 5 different devices and claim up to 7 different
            replacements in a year.
          </p>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
export default About;
