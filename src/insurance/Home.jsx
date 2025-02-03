import Navigation from "./Navigation.jsx";
import picture from "../assets/woman.jpg";
import picture2 from "../assets/captura2.png";
import picture3 from "../assets/device.png";
import picture4 from "../assets/tablet.png";
import picture5 from "../assets/girliPad.png";
import picture6 from "../assets/happiness.jpg";
import picture7 from "../assets/home.jpg";
import picture8 from "../assets/manandkid.jpg";
import Footer from "./footer.jsx";
import { motion } from "motion/react";
function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <Navigation />
      <div className="row g-0 presentation">
        <div className="col-6">
          <img
            className="presentation-img"
            alt="woman talking on the phone"
            src={picture}
          ></img>
        </div>

        <div className="col-6 presentation-desc">
          <p className="text-center">
            Any issue with your device?
            <br />
            we get you covered
          </p>
          <img
            className="description-img2"
            alt="image of a device"
            src={picture2}
          ></img>
        </div>

        <div className="vision">
          <p className="vision-description">Our Goal</p>
        </div>
      </div>

      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="row">
            <div className="carousel-item active slide-img">
            
              <img src={picture3} className="slide-img" alt="..." />
            </div>

            <div className="carousel-item">
              <img src={picture4} className="slide-img" alt="..." />
            </div>

            <div className="carousel-item">
              <img src={picture5} className="slide-img" alt="..." />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      {/*end of carrusel*/}

      <section className="benefits">
        <div className="container-fluid benefits-container p-1">
          <h2 className="text-center mt-4 text-light ">
            Some of the benefits of getting covered
          </h2>
          <div className="devider"></div>

          <div className="row text-center benefit-div-image-container">
            <figure className="benefits-img-container col-12 col-md-4">
              <img
                src={picture6}
                alt="two person hogging"
                className="benefits-img"
              />
              <figcaption className="text-light image-text text-center">
                don't lose time to keep in
                <br />
                touch with your loved ones
                <br />
                get a reaplacement the same day
              </figcaption>
            </figure>

            <figure className="benefits-img-container col-12 col-md-4">
              <img
                src={picture7}
                alt="two person hogging"
                className="benefits-img"
              />
              <figcaption className="text-light image-text text-center">
                file a claim and get a<br />
                replacement delivered
                <br />
                to your house
              </figcaption>
            </figure>

            <figure className="benefits-img-container col-12 col-md-4">
              <img
                src={picture8}
                alt="two person hogging"
                className="benefits-img"
              />
              <figcaption className="text-light image-text text-center">
                no need to pay the full price
                <br />
                of a new device, you can get
                <br />a replacement instead
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <div className="acordion-container bg-dark container-fluid">
        <h2 className="text-light text-center faq">
          Frequently Asked Questions
        </h2>

        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
              >
                What is the maximun amount of Replacement that i can get in a
                year?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <p>
                  in general the maximun amount of replacement that a customer
                  can receive during a year is 7, but it depends on the type of
                  protection the customer is enrolled.
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                What is protection 360?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <p>
                  Protection 360 is a protection plan that allows the customer
                  to enroll up to 3 different devices: and file up to 5 claims
                  withen a 12 months period.
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                What is Basic device protection?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <p>
                  Basic device protection is a protection plan that allows the
                  customer to enroll 1 device: and file up to 3 claims withen a
                  12 months period.
                </p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                What is Premium Care protection?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <p>
                  Premium Care protection is a protection plan that allows the
                  customer to enroll up to 5 different devices: and file up to 7
                  claims withen a 12 months period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default Home;
