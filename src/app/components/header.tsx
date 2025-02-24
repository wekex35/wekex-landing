

export default function Header() {
    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
        {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
        {/* <!-- <img src="assets/img/logo.png" alt=""> --> */}
        <h1 className="sitename">Wekex</h1>
      </a>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

                <a className="btn-getstarted" href="#contact">Get Started</a>

            </div>
        </header>
    )
}