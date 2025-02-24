import Image from "next/image";
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <main className="main">

    {/* Hero Section */}
    <section id="hero" className="hero section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content" data-aos="fade-up" data-aos-delay="200">
              <div className="company-badge mb-4">
                <i className="bi bi-gear-fill me-2"></i>
                Working for your success
              </div>

              <h1 className="mb-4">
                Complete IT Solutions & Services<br />
                <span className="accent-text">For Your Digital Business Growth</span>
              </h1>

              <p className="mb-4 mb-md-5">
                Transform your business with our comprehensive IT solutions. Expert web development, mobile apps, IoT integration, and e-commerce platforms.
              </p>

              <div className="hero-buttons">
                <a href="#about" className="btn btn-primary me-0 me-sm-2 mx-1">Get Started</a>
                <a href="#" className="btn btn-link mt-2 mt-sm-0 glightbox">
                  <i className="bi bi-play-circle me-1"></i>
                  Watch Video
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-image" data-aos="zoom-out" data-aos-delay="300">
              <img src="assets/img/illustration-1.webp" alt="Wekex Technologies IT Solutions Illustration" className="img-fluid" />

              <div className="customers-badge">
                <div className="customer-avatars">
                  <img src="assets/img/avatar-1.webp" alt="Customer 1" className="avatar" />
                  <img src="assets/img/avatar-2.webp" alt="Customer 2" className="avatar" />
                  <img src="assets/img/avatar-3.webp" alt="Customer 3" className="avatar" />
                  <img src="assets/img/avatar-4.webp" alt="Customer 4" className="avatar" />
                  <img src="assets/img/avatar-5.webp" alt="Customer 5" className="avatar" />
                  <span className="avatar more">12+</span>
                </div>
                <p className="mb-0 mt-2">50+ satisfied clients trust our IT solutions worldwide</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row stats-row gy-4 mt-5" data-aos="fade-up" data-aos-delay="500">
          <div className="col-lg-3 col-md-6">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bi bi-trophy"></i>
              </div>
              <div className="stat-content">
                <h4>100+ Projects</h4>
                <p className="mb-0">Successfully Delivered</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bi bi-briefcase"></i>
              </div>
              <div className="stat-content">
                <h4>50+ Clients</h4>
                <p className="mb-0">Trusted Partners</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bi bi-graph-up"></i>
              </div>
              <div className="stat-content">
                <h4>12+ Years</h4>
                <p className="mb-0">Industry Experience</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bi bi-award"></i>
              </div>
              <div className="stat-content">
                <h4>24/7 Support</h4>
                <p className="mb-0">Technical Assistance</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>

    {/* About Section */}
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 align-items-center justify-content-between">
          
          <div className="col-xl-5" data-aos="fade-up" data-aos-delay="200">
            <span className="about-meta">MORE ABOUT US</span>
            <h2 className="about-title">Your Trusted Technology Partner</h2>
            <p className="about-description">At Wekex, we combine technical expertise with innovative solutions to transform your business digitally. Our team of experienced professionals delivers cutting-edge solutions that drive growth and efficiency for businesses across industries.</p>

            <div className="row feature-list-wrapper">
              <div className="col-md-6">
                <ul className="feature-list">
                  <li><i className="bi bi-check-circle-fill"></i> Custom Software Development</li>
                  <li><i className="bi bi-check-circle-fill"></i> Mobile App Solutions</li>
                  <li><i className="bi bi-check-circle-fill"></i> IoT Implementation</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="feature-list">
                  <li><i className="bi bi-check-circle-fill"></i> 24/7 Technical Support</li>
                  <li><i className="bi bi-check-circle-fill"></i> Cloud Solutions</li>
                  <li><i className="bi bi-check-circle-fill"></i> Digital Transformation</li>
                </ul>
              </div>
            </div>

            <div className="info-wrapper">
              <div className="row gy-4">
                <div className="col-lg-5">
                  <div className="profile d-flex align-items-center gap-3">
                    <img src="assets/img/avatar-1.webp" alt="CEO Profile" className="profile-image" />
                    <div>
                      <h4 className="profile-name">Wekex Team</h4>
                      <p className="profile-position">Technology Experts</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="contact-info d-flex align-items-center gap-2">
                    <i className="bi bi-telephone-fill"></i>
                    <div>
                      <p className="contact-label">Get in touch</p>
                      <p className="contact-number">+91 848 403 4341</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6" data-aos="fade-up" data-aos-delay="300">
            <div className="image-wrapper">
              <div className="images position-relative" data-aos="zoom-out" data-aos-delay="400">
                <img src="assets/img/about-5.webp" alt="IT Solutions" className="img-fluid main-image rounded-4" />
                <img src="assets/img/about-2.webp" alt="Team Collaboration" className="img-fluid small-image rounded-4" />
              </div>
              <div className="experience-badge floating">
                <h3>12+ <span>Years</span></h3>
                <p>Of excellence in IT services</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* Features Section */}
    <section id="features" className="features section">

      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Features</h2>
        <p>Discover the powerful features that make our solutions stand out and deliver exceptional value to your business</p>
      </div>{/* End Section Title */}

      <div className="container">

        <div className="d-flex justify-content-center">

          <ul className="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">
            <li className="nav-item">
              <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1">
                <h4>Web Solutions</h4>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2">
                <h4>Mobile Apps</h4>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3">
                <h4>IoT Services</h4>
              </a>
            </li>
          </ul>

        </div>

        <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
          {/* Web Solutions Tab */}
          <div className="tab-pane fade active show" id="features-tab-1">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                <h3>Custom Web Development Solutions</h3>
                <p className="fst-italic">
                  Transform your online presence with our cutting-edge web development services tailored to your business needs.
                </p>
                <ul>
                  <li><i className="bi bi-check2-all"></i> <span>Responsive website development for optimal viewing across all devices</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>E-commerce solutions with secure payment integration</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>Custom web applications with scalable architecture and robust security features</span></li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/features-illustration-1.webp" alt="Web Development" className="img-fluid" />
              </div>
            </div>
          </div>{/* End tab content item */}

          {/* Mobile Apps Tab */}
          <div className="tab-pane fade" id="features-tab-2">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                <h3>Mobile Application Development</h3>
                <p className="fst-italic">
                  Create powerful mobile experiences with our expert app development services for iOS and Android platforms.
                </p>
                <ul>
                  <li><i className="bi bi-check2-all"></i> <span>Native and cross-platform mobile applications</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>User-centric design with seamless functionality</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>Integration with existing systems and third-party services</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>Regular updates and maintenance support for optimal performance</span></li>
                </ul>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/features-illustration-2.webp" alt="Mobile Development" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="features-tab-3">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                <h3>IoT and Smart Solutions</h3>
                <ul>
                  <li><i className="bi bi-check2-all"></i> <span>Smart device integration and automation solutions</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>Real-time monitoring and data analytics</span></li>
                  <li><i className="bi bi-check2-all"></i> <span>Secure IoT infrastructure development and maintenance</span></li>
                </ul>
                <p className="fst-italic">
                  Leverage the power of IoT to transform your business operations with our innovative smart solutions and connected devices.
                </p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/features-illustration-3.webp" alt="IoT Solutions" className="img-fluid" />
              </div>
            </div>
          </div>{/* End tab content item */}

        </div>

      </div>

    </section>{/* /Features Section */}

    {/* Features Cards Section */}
    <section id="features-cards" className="features-cards section">

      <div className="container">

        <div className="row gy-4">

          <div className="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div className="feature-box orange">
              <i className="bi bi-award"></i>
              <h4>Expert Team</h4>
              <p>Skilled professionals with years of experience in delivering cutting-edge IT solutions and technical expertise</p>
            </div>
          </div>


          <div className="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div className="feature-box blue">
              <i className="bi bi-patch-check"></i>
              <h4>Quality Assurance</h4>
              <p>Rigorous testing and quality control processes to ensure reliable and high-performance solutions</p>
            </div>
          </div>
          <div className="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
            <div className="feature-box green">
              <i className="bi bi-sunrise"></i>
              <h4>Innovation First</h4>
              <p>Staying ahead with latest technologies and innovative approaches to solve complex business challenges</p>
            </div>
          </div>

          <div className="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
            <div className="feature-box red">
              <i className="bi bi-shield-check"></i>
              <h4>24/7 Support</h4>
              <p>Round-the-clock technical support and maintenance to ensure your systems run smoothly</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* Features 2 Section */}
    <section id="features-2" className="features-2 section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center">

          <div className="col-lg-4">
            <div className="feature-item text-end mb-5" data-aos="fade-right" data-aos-delay="200">
              <div className="d-flex align-items-center justify-content-end gap-4">
                <div className="feature-content">
                  <h3>Cross-Platform Solutions</h3>
                  <p>Our applications work seamlessly across all devices and platforms, ensuring your business reaches users wherever they are.</p>
                </div>
                <div className="feature-icon flex-shrink-0">
                  <i className="bi bi-display"></i>
                </div>
              </div>
            </div>

            <div className="feature-item text-end mb-5" data-aos="fade-right" data-aos-delay="300">
              <div className="d-flex align-items-center justify-content-end gap-4">
                <div className="feature-content">
                  <h3>Modern UI/UX Design</h3>
                  <p>Intuitive interfaces and engaging user experiences that keep your customers coming back and boost engagement rates.</p>
                </div>
                <div className="feature-icon flex-shrink-0">
                  <i className="bi bi-feather"></i>
                </div>
              </div>
            </div>

            <div className="feature-item text-end" data-aos="fade-right" data-aos-delay="400">
              <div className="d-flex align-items-center justify-content-end gap-4">
                <div className="feature-content">
                  <h3>High Performance</h3>
                  <p>Optimized applications that deliver fast loading times and smooth performance across all devices and network conditions.</p>
                </div>
                <div className="feature-icon flex-shrink-0">
                  <i className="bi bi-eye"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="phone-mockup text-center">
              <img src="assets/img/phone-app-screen.webp" alt="Mobile App Development" className="img-fluid" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="feature-item mb-5" data-aos="fade-left" data-aos-delay="200">
              <div className="d-flex align-items-center gap-4">
                <div className="feature-icon flex-shrink-0">
                  <i className="bi bi-code-square"></i>
                </div>
                <div className="feature-content">
                  <h3>Clean Code Architecture</h3>
                  <p>Well-structured, maintainable code following industry best practices for long-term scalability and efficiency.</p>
                </div>
              </div>
            </div>

            <div className="feature-item mb-5" data-aos="fade-left" data-aos-delay="300">
              <div className="d-flex align-items-center gap-4">
                <div className="feature-icon flex-shrink-0">
                  <i className="bi bi-phone"></i>
                </div>
                <div className="feature-content">
                  <h3>Responsive Design</h3>
                  <p>Websites and applications that adapt perfectly to any screen size, providing optimal viewing experience.</p>
                </div>
              </div>
            </div>

            <div className="feature-item" data-aos="fade-left" data-aos-delay="400">
              <div className="d-flex align-items-center gap-4">
                <div className="feature-icon flex-shrink-0">
                  <i className="bi bi-browser-chrome"></i>
                </div>
                <div className="feature-content">
                  <h3>Cross-Browser Support</h3>
                  <p>Consistent functionality and appearance across all major browsers, ensuring maximum reach for your applications.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>


    {/* Call To Action Section */}
    <section id="call-to-action" className="call-to-action section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row content justify-content-center align-items-center position-relative">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-4 mb-4">Transform Your Business with Our IT Solutions</h2>
            <p className="mb-4">Take your business to the next level with our cutting-edge technology solutions. Let's work together to achieve your digital transformation goals.</p>
            <a href="#contact" className="btn btn-cta">Get Started Now</a>
          </div>

          {/* Abstract Background Elements */}
          <div className="shape shape-1">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M47.1,-57.1C59.9,-45.6,68.5,-28.9,71.4,-10.9C74.2,7.1,71.3,26.3,61.5,41.1C51.7,55.9,35,66.2,16.9,69.2C-1.3,72.2,-21,67.8,-36.9,57.9C-52.8,48,-64.9,32.6,-69.1,15.1C-73.3,-2.4,-69.5,-22,-59.4,-37.1C-49.3,-52.2,-32.8,-62.9,-15.7,-64.9C1.5,-67,34.3,-68.5,47.1,-57.1Z" transform="translate(100 100)"></path>
            </svg>
          </div>

          <div className="shape shape-2">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M41.3,-49.1C54.4,-39.3,66.6,-27.2,71.1,-12.1C75.6,3,72.4,20.9,63.3,34.4C54.2,47.9,39.2,56.9,23.2,62.3C7.1,67.7,-10,69.4,-24.8,64.1C-39.7,58.8,-52.3,46.5,-60.1,31.5C-67.9,16.4,-70.9,-1.4,-66.3,-16.6C-61.8,-31.8,-49.7,-44.3,-36.3,-54C-22.9,-63.7,-8.2,-70.6,3.6,-75.1C15.4,-79.6,28.2,-58.9,41.3,-49.1Z" transform="translate(100 100)"></path>
            </svg>
          </div>

          {/* Dot Pattern Groups */}
          <div className="dots dots-1">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
              </pattern>
              <rect width="100" height="100" fill="url(#dot-pattern)"></rect>
            </svg>
          </div>

          <div className="dots dots-2">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <pattern id="dot-pattern-2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
              </pattern>
              <rect width="100" height="100" fill="url(#dot-pattern-2)"></rect>
            </svg>
          </div>

          <div className="shape shape-3">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M43.3,-57.1C57.4,-46.5,71.1,-32.6,75.3,-16.2C79.5,0.2,74.2,19.1,65.1,35.3C56,51.5,43.1,65,27.4,71.7C11.7,78.4,-6.8,78.3,-23.9,72.4C-41,66.5,-56.7,54.8,-65.4,39.2C-74.1,23.6,-75.8,4,-71.7,-13.2C-67.6,-30.4,-57.7,-45.2,-44.3,-56.1C-30.9,-67,-15.5,-74,0.7,-74.9C16.8,-75.8,33.7,-70.7,43.3,-57.1Z" transform="translate(100 100)"></path>
            </svg>
          </div>
        </div>

      </div>

    </section>{/* /Call To Action Section */}


    {/* Clients Section */}
    <section id="clients" className="clients section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper init-swiper"
         
        >
          <div className="swiper-wrapper align-items-center">
            <div className="swiper-slide"><img src="assets/img/clients/client-1.png" className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src="assets/img/clients/client-2.png" className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src="assets/img/clients/client-3.png" className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src="assets/img/clients/client-4.png" className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src="assets/img/clients/client-5.png" className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src="assets/img/clients/client-6.png" className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src="assets/img/clients/client-7.png" className="img-fluid" alt="" /></div>
            <div className="swiper-slide"><img src="assets/img/clients/client-8.png" className="img-fluid" alt="" /></div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section id="testimonials" className="testimonials section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>See what our clients say about their experience working with Wekex Technologies</p>
      </div>

      <div className="container">
        <div className="row g-5">

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="CEO Testimonial" />
              <h3>Rajesh Kumar</h3>
              <h4>CEO, TechStart Solutions</h4>
              <div className="stars">
                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                <span>Wekex transformed our business with their exceptional web development services. Their team's expertise in creating a scalable e-commerce platform helped us increase our online sales by 200%.</span>
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="Marketing Director Testimonial" />
              <h3>Priya Sharma</h3>
              <h4>Marketing Director, InnovatePro</h4>
              <div className="stars">
                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                <span>The mobile app developed by Wekex exceeded our expectations. Their attention to detail and user-centric approach resulted in an app that our customers love. The support team has been exceptional.</span>
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="Business Owner Testimonial" />
              <h3>Amit Patel</h3>
              <h4>Owner, SmartRetail</h4>
              <div className="stars">
                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                <span>The IoT solution implemented by Wekex revolutionized our inventory management. Their team's technical expertise and professional approach made the entire process smooth and efficient.</span>
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="CTO Testimonial" />
              <h3>Suresh Menon</h3>
              <h4>CTO, FinTech Solutions</h4>
              <div className="stars">
                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                <span>Working with Wekex on our digital transformation project was a great decision. Their team's dedication to quality and innovative solutions helped us modernize our entire system infrastructure.</span>
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section id="stats" className="stats section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="50" data-purecounter-duration="1" className="purecounter">50</span>
              <p>Clients</p>
            </div>
          </div>{/* End Stats Item */}

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="30" data-purecounter-duration="1" className="purecounter">30</span>
              <p>Projects</p>
            </div>
          </div>{/* End Stats Item */}

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="14530" data-purecounter-duration="1" className="purecounter">14530</span>
              <p>Hours Of Support</p>
            </div>
          </div>{/* End Stats Item */}

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter">32</span>
              <p>Members</p>
            </div>
          </div>{/* End Stats Item */}

        </div>

      </div>

    </section>{/* /Stats Section */}

    {/* Services Section */}
    <section id="services" className="services section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Services</h2>
        <p>We are here to manage your Complete IT World with experience</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-card d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-code-square"></i>
              </div>
              <div>
                <h3>Web Development</h3>
                <p>Custom website development using latest technologies. We create responsive, user-friendly websites that help businesses establish a strong online presence and drive growth.</p>
                <a href="service-details.html?service=web-development" title="Web Development Services">Read More <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-card d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-phone"></i>
              </div>
              <div>
                <h3>Mobile App Development</h3>
                <p>Native and cross-platform mobile applications for iOS and Android. We deliver intuitive, high-performance apps that engage users and streamline business operations.</p>
                <a href="service-details.html?service=mobile-development" title="Mobile App Development Services">Read More <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-card d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-cpu"></i>
              </div>
              <div>
                <h3>IoT Solutions</h3>
                <p>Comprehensive IoT services from device integration to data analytics. We help businesses leverage smart technology for improved efficiency and automation.</p>
                <a href="service-details.html?service=iot-solutions" title="IoT Solutions">Read More <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-card d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-cart3"></i>
              </div>
              <div>
                <h3>E-Commerce Solutions</h3>
                <p>Custom e-commerce platforms with secure payment integration. We build scalable online stores that provide seamless shopping experiences and boost sales.</p>
                <a href="service-details.html?service=ecommerce-solutions" title="E-Commerce Solutions">Read More <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="500">
            <div className="service-card d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-robot"></i>
              </div>
              <div>
                <h3>AI Solutions</h3>
                <p>Advanced AI solutions including Agentic AI, ChatGPT integration, and custom machine learning models. We help businesses leverage AI for automation and growth.</p>
                <a href="service-details.html?service=ai-solutions" title="AI Solutions">Read More <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="600">
            <div className="service-card d-flex">
              <div className="icon flex-shrink-0">
                <i className="bi bi-cpu"></i>
              </div>
              <div>
                <h3>Custom AI & ML Models</h3>
                <p>Specialized on-premise AI solutions, custom machine learning models, and private LLMs. We develop tailored AI solutions that ensure data privacy and meet specific business requirements.</p>
                <a href="service-details.html?service=custom-ai" title="Custom AI Solutions">Read More <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* Pricing Section */}
    <section id="pricing" className="pricing section light-background" style={{ display: 'none' }}>

      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Pricing</h2>
        <p>Choose the perfect plan that fits your business needs and budget</p>
      </div>{/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row g-4 justify-content-center">

          {/* Basic Plan */}
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="pricing-card">
              <h3>Basic Plan</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">9.9</span>
                <span className="period">/ month</span>
              </div>
              <p className="description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam.</p>

              <h4>Featured Included:</h4>
              <ul className="features-list">
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Duis aute irure dolor
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Excepteur sint occaecat
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Nemo enim ipsam voluptatem
                </li>
              </ul>

              <a href="#" className="btn btn-primary">
                Buy Now
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="pricing-card popular">
              <div className="popular-badge">Most Popular</div>
              <h3>Standard Plan</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">19.9</span>
                <span className="period">/ month</span>
              </div>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>

              <h4>Featured Included:</h4>
              <ul className="features-list">
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Lorem ipsum dolor sit amet
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Consectetur adipiscing elit
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Sed do eiusmod tempor
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Ut labore et dolore magna
                </li>
              </ul>

              <a href="#" className="btn btn-light">
                Buy Now
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div className="pricing-card">
              <h3>Premium Plan</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">39.9</span>
                <span className="period">/ month</span>
              </div>
              <p className="description">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.</p>

              <h4>Featured Included:</h4>
              <ul className="features-list">
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Temporibus autem quibusdam
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Saepe eveniet ut et voluptates
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Nam libero tempore soluta
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Cumque nihil impedit quo
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  Maxime placeat facere possimus
                </li>
              </ul>

              <a href="#" className="btn btn-primary">
                Buy Now
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

        </div>

      </div>

    </section>{/* /Pricing Section */}

    {/* Faq Section */}
    <section className="faq-9 faq section light-background" id="faq">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <h2 className="faq-title">Have a question? Check out the FAQ</h2>
            <p className="faq-description">Find answers to common questions about our IT services, development process, and technology solutions. If you need more information, our team is always here to help.</p>
            <div className="faq-arrow d-none d-lg-block">
              <svg className="faq-arrow" width="200" height="211" viewBox="0 0 200 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488ZM60.8213 88.0427C67.6894 72.648 78.8538 59.1566 92.1207 49.0388C98.8475 43.9065 106.334 39.2953 114.188 36.1439C117.295 34.8947 120.798 33.6609 124.168 33.635C134.365 33.5511 136.354 42.9911 132.638 51.031C120.47 77.4222 86.8639 93.9837 58.0983 94.9666C58.8971 92.6666 59.783 90.3603 60.8213 88.0427Z" fill="currentColor"></path>
              </svg>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="faq-container">

              <div className="faq-item faq-active">
                <h3>What services does Wekex provide in web development?</h3>
                <div className="faq-content">
                  <p>We offer comprehensive web development services including custom website development, e-commerce solutions, web applications, CMS development, and progressive web apps (PWAs). Our expertise covers both frontend and backend development using the latest technologies.</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>{/* End Faq item*/}

              <div className="faq-item">
                <h3>Do you provide mobile app development services?</h3>
                <div className="faq-content">
                  <p>Yes, we specialize in both Android and iOS app development. We create native mobile applications as well as cross-platform solutions using technologies like React Native and Flutter, ensuring high performance and excellent user experience.</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>{/* End Faq item*/}

              <div className="faq-item">
                <h3>What IoT solutions do you offer?</h3>
                <div className="faq-content">
                  <p>Our IoT solutions include smart device integration, sensor networks, real-time monitoring systems, and automated control systems. We help businesses leverage IoT technology to improve efficiency, gather data, and make informed decisions.</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>{/* End Faq item*/}

              <div className="faq-item">
                <h3>How do you handle project timelines and communication?</h3>
                <div className="faq-content">
                  <p>We maintain transparent communication throughout the project with regular updates and dedicated project managers. Our agile development approach ensures timely delivery while adapting to changing requirements and maintaining quality standards.</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>{/* End Faq item*/}

              <div className="faq-item">
                <h3>What support and maintenance services do you provide?</h3>
                <div className="faq-content">
                  <p>We offer 24/7 technical support, regular maintenance updates, security patches, and performance optimization. Our team is always available to handle any issues and ensure your systems run smoothly and efficiently.</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>{/* End Faq item*/}

            </div>
          </div>

        </div>
      </div>
    </section>{/* /Faq Section */}

    {/* Call To Action 2 Section */}
    <section id="call-to-action-2" className="call-to-action-2 section dark-background">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="text-center">
              <h3>Ready to Transform Your Digital Presence?</h3>
              <p>Let's collaborate to bring your vision to life. From custom web development to innovative IoT solutions, our team of experts is ready to help you navigate the digital landscape and achieve your business goals.</p>
              <a className="cta-btn" href="#">Call To Action</a>
            </div>
          </div>
        </div>
      </div>
    </section>{/* /Call To Action 2 Section */}

    {/* Contact Section */}
    <section id="contact" className="contact section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact Us</h2>
        <p>Get in touch with us for your IT solution needs</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4 g-lg-5">
          <div className="col-lg-5">
            <div className="info-box" data-aos="fade-up" data-aos-delay="200">
              <h3>Contact Info</h3>
              <p>Reach out to us for any queries about our services or to discuss your project requirements.</p>

              <div className="info-item" data-aos="fade-up" data-aos-delay="300">
                <div className="icon-box"><i className="bi bi-geo-alt"></i></div>
                <div className="content">
                  <h4>Our Location</h4>
                  <p>Shanti Vista, Yashwant shrusti<br />Boisar 401501, Maharashtra</p>
                </div>
              </div>

              <div className="info-item" data-aos="fade-up" data-aos-delay="400">
                <div className="icon-box"><i className="bi bi-telephone"></i></div>
                <div className="content">
                  <h4>Phone Number</h4>
                  <p>+91 848 403 4341</p>
                </div>
              </div>

              <div className="info-item" data-aos="fade-up" data-aos-delay="500">
                <div className="icon-box"><i className="bi bi-envelope"></i></div>
                <div className="content">
                  <h4>Email Address</h4>
                  <p>client@wekex.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="contact-form" data-aos="fade-up" data-aos-delay="300">
              <h3>Get In Touch</h3>
              <p>Fill out the form below and we'll get back to you shortly. We're here to help with all your IT solution needs.</p>
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </section>

  </main>
  );
}