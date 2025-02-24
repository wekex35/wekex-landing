
export default function Footer() {
    return (
        <footer id="footer" className="footer">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">Wekex</span>
              </a>
              <div className="footer-contact pt-3">
                <p>New Home Residency, Yashwant shrusti</p>
                <p>Boisar 401501, Maharashtra</p>
                <p className="mt-3"><strong>Phone:</strong> <span>+91 848 403 4341</span></p>
                <p><strong>Email:</strong> <span>client@wekex.com</span></p>
              </div>
              <div className="social-links d-flex mt-4">
                <a href="#"><i className="bi bi-twitter-x"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
    
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html#about">About us</a></li>
                <li><a href="index.html#services">Services</a></li>
                <li><a href="#">Terms of service</a></li>
                <li><a href="#">Privacy policy</a></li>
              </ul>
            </div>
    
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><a href="service-details.html?service=web-development">Web Development</a></li>
                <li><a href="service-details.html?service=mobile-development">Mobile App Development</a></li>
                <li><a href="service-details.html?service=iot-solutions">IoT Solutions</a></li>
                <li><a href="service-details.html?service=ecommerce-solutions">E-Commerce Solutions</a></li>
              </ul>
            </div>
    
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Technologies</h4>
              <ul>
                <li><a href="#">React & Node.js</a></li>
                <li><a href="#">Flutter & Firebase</a></li>
                <li><a href="#">Python & Django</a></li>
                <li><a href="#">IoT & Embedded</a></li>
                <li><a href="#">Cloud Solutions</a></li>
              </ul>
            </div>
    
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Industries</h4>
              <ul>
                <li><a href="#">Healthcare</a></li>
                <li><a href="#">E-commerce</a></li>
                <li><a href="#">Education</a></li>
                <li><a href="#">Manufacturing</a></li>
                <li><a href="#">Logistics</a></li>
              </ul>
            </div>
          </div>
        </div>
    
        <div className="container copyright text-center mt-4">
          <p>© <span>Copyright</span> <strong className="px-1">Wekex Technologies</strong> <span>All Rights Reserved</span></p>
        </div>
      </footer>
    )
}
