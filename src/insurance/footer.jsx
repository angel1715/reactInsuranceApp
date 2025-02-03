

function Footer(){

    return(
        <div className="footer-container bg-dark">
            <footer>
                
                <div className="container footer-elements-container">
                    <div className="footer-email-container">
                <i className="fa-solid fa-envelope text-light fs-5 message-icon"></i>
                <small className="text-light send-us-a-message"> <a href="mailto:angelgarci310@gmail.com" className="text-light">angelgarci310@gmail.com</a></small>
                </div>

                <div className="footer-phone-container mt-4">
                <i className="fa-solid fa-phone text-light fs-5"></i>
                <small className="text-light"> 829-747-0508</small>
                </div>

                <div className="footer-web-container mt-4">
                <i className="fa-solid fa-globe text-light fs-5"></i>
                <small className="text-light"> www.agtech.com</small>
                </div>
                
                <div className="footer-copyright-container mt-4">
                <i class="fa-regular fa-copyright text-light fs-5"></i>
                
                <small className="text-light"> All rights reserved AG Tech Inc</small>
                </div>
                </div>
                
                
              
            </footer>
        </div>
    )
}
export default Footer