import React from "react";

export default function Header() {
  return (
    <div>
      {/* <!--start preloader--> */}
      {/* <div class="preloader">
        <div class="d-table">
          <div class="d-table-cell align-middle">
            <div class="spinner">
              <div class="double-bounce1"></div>
              <div class="double-bounce2"></div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!--end preloader--> */}

      {/* <!--start header--> */}
      <header id="header">
        <div class="container">
          <div className="topBar">
            <div className="topbar-left">
              {/* <a class="logo-scroll" href="#">
                <img src="assets/images/logo.png" alt="logo" />
              </a> */}
              <a class="logo-top" href="Home">
                <img src="assets/images/logo.png" alt="logo" />
              </a>
              <div className="topbar-typography">
                <h4>Tackgram</h4>
                <span>Join me on Tackgram!</span>
              </div>
            </div>
            <div className="topbar-btn">
              <button className="open-app">Open App</button>
            </div>
          </div>
          <nav class="navbar navbar-expand-lg justify-content-center">
            {/* <!--logo--> */}
            <a class="logo" href="Home">
              <img src="assets/images/logo.png" alt="logo" />
            </a>
            {/* <!--scroll logo--> */}

            {/* <a class="logo-scroll" href="#">
              <img src="assets/images/logo.png" alt="logo" />
            </a> */}
            {/* <button class="navbar-toggler ml-1" type="button" data-toggle="collapse" data-target="#collapsingNavbar2">
                        <span class="icofont-navigation-menu"></span>
                    </button> */}
            <div
              class="navbar-collapse collapse justify-content-between align-items-center w-100"
              id="collapsingNavbar2"
            >
              <ul class="navbar-nav mx-auto text-center">
                <li class="nav-item">
                  <a class="nav-link active" href="Home" >
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="About" >
                    About Us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="TermsofServices" >
                    Terms of Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="PrivacyPolicy" >
                    Privacy Policy
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="TackgramRules" >
                    Tackgram Rules
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="Verification" >
                    Verifications
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      {/* <!--end header--> */}
    </div>
  );
}
