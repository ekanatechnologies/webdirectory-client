import React from "react";

import ads1 from "../img/ads1.png";
import ads2 from "../img/ads2.png";

const Home = () => {
  return (
    <div>
    
      <section id="hero" className="d-flex align-items-center">
        <div
          className="container hero-banner text-center"
          data-aos="zoom-out"
          data-aos-delay="100"
        >
          <h1>SEO Friendly Directory List</h1>
          <h2>We strive to keep inclusion on this list to high standards.</h2>
          <div className="d-flex text-center justify-content-center">
            <a href="#about" className="btn-get-started scrollto">
              Get Started
            </a>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="about" className="about section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h3>
                The Best <span> SEO Friendly</span> Directory List
              </h3>
            </div>
            <div className="row">
              <div
                className="col-lg-12 pt-4 pt-lg-0 content d-flex flex-column justify-content-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p className="fst-italic">
                  Welcome to the best SEO friendly directory list. We strive to
                  keep inclusion on this list to high standards. All directories
                  listed are updated to ensure not only are the sites active but
                  they continue to adhere to a high standard of editorial
                  discretion.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-card-checklist"></i>
                    <div>
                      <h5>Free Directory List</h5>
                      <p>
                        this is the ultimate list of best free directories to
                        submit your site.
                      </p>
                    </div>
                  </li>
                  <li>
                    <i className="bi bi-card-checklist"></i>
                    <div>
                      <h5>Paid Directory List</h5>
                      <p>A list of 54 paid Web directories on the internet</p>
                    </div>
                  </li>
                  <li>
                    <i className="bi bi-card-checklist"></i>
                    <div>
                      <h5>Trusted Directory List</h5>
                      <p>
                        A list of directories that stand out from the rest by
                        demonstrating a long-term commitment and by being
                        outstanding
                      </p>
                    </div>
                  </li>
                  <li>
                    <i className="bi bi-card-checklist"></i>
                    <div>
                      <h5>Niche Directory List</h5>
                      <p>A list of niche Web directories on the internet</p>
                    </div>
                  </li>
                  <li>
                    <i className="bi bi-card-checklist"></i>
                    <div>
                      <h5>Directory Submission Service</h5>
                      <p>
                        a advanced link building service provided by our site
                        that offers webmasters assistance with submitting their
                        Web site to the best Web directories on the internet.
                      </p>
                    </div>
                  </li>
                </ul>
                <p>
                  Follow us on twitter at{" "}
                  <a href="https://twitter.com/directoryfire">
                    https://twitter.com/directoryfire
                  </a>
                </p>
                <p>
                  Credit to SEO guru Aaron Wall for our trusted directory list.
                  See his{" "}
                  <a href="http://www.directoryarchives.com/">
                    Directory of Directories
                  </a>
                </p>
                <p>
                  Articles – a list of articles written by both our admin and
                  outside guest posters related to (mostly) the directory, link
                  building, and SEO industry
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img src={ads1} alt="" width="100%" />
              </div>
              <div className="col-lg-6">
                <img src={ads2} alt="" width="100%" />
              </div>
            </div>
          </div>
        </section>
        <section id="counts" className="counts">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="bi bi-emoji-smile"></i>

                  <p>12001</p>
                  <p>Free Directory List</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                <div className="count-box">
                  <i className="bi bi-journal-richtext"></i>

                  <p>13200</p>
                  <p>Trusted Directories</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className="bi bi-headset"></i>

                  <p>21200</p>
                  <p>Paid Directories</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className="bi bi-people"></i>

                  <p>12300</p>
                  <p>Niche Directories</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="services">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h3>
                How it <span>works</span>
              </h3>
              <p>
                Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
                adipisci expedita at voluptas atque vitae autem.
              </p>
            </div>

            <div className="row">
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <h4>
                    <a href="">Find Best Directories</a>
                  </h4>
                  <p>
                    All directories listed are updated to ensure not only are
                    the sites active but they continue to adhere to a high
                    standard of editorial discretion.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bi bi-credit-card-2-back"></i>
                  </div>
                  <h4>
                    <a href="">Paid & Free Directories</a>
                  </h4>
                  <p>
                    All directories listed are updated to ensure not only are
                    the sites active but they continue to adhere to a high
                    standard of editorial discretion.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bi bi-stack"></i>
                  </div>
                  <h4>
                    <a href="">Submit Your Listing</a>
                  </h4>
                  <p>
                    All directories listed are updated to ensure not only are
                    the sites active but they continue to adhere to a high
                    standard of editorial discretion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container text-center">
            <img src={ads1} alt="" width="80%" />
          </div>
        </section>
        <section id="hero2" className="d-flex align-items-center">
          <div
            className="container hero-banner2 text-center"
            data-aos="zoom-out"
            data-aos-delay="100"
          >
            <h1>Aliquam erat volutpat interdum</h1>
            <h2>
              Get ready to start your exciting journey. Our agency will lead you
              through the amazing digital world
            </h2>
            <div className="d-flex text-center justify-content-center">
              <a href="#about" className="btn-get-started scrollto">
                <i className="bi bi-play-circle-fill"></i> Promo Video
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="section-title">
            <h3>Testimonials</h3>
          </div>
          <div className="container mt-5 mb-5">
            <div className="row g-2">
              <div className="col-md-4">
                <div className="card p-3 text-center px-4">
                  <div className="user-image">
                    {" "}
                    <img
                      src="https://i.imgur.com/PKHvlRS.jpg"
                      className="rounded-circle"
                      width="80"
                    />{" "}
                  </div>
                  <div className="user-content">
                    <h5 className="mb-0">Bruce Hardy</h5>{" "}
                    <span>Software Developer</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className="ratings">
                    {" "}
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>{" "}
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-3 text-center px-4">
                  <div className="user-image">
                    {" "}
                    <img
                      src="https://i.imgur.com/w2CKRB9.jpg"
                      className="rounded-circle"
                      width="80"
                    />{" "}
                  </div>
                  <div className="user-content">
                    <h5 className="mb-0">Mark Smith</h5>{" "}
                    <span>Web Developer</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className="ratings">
                    {" "}
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>{" "}
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>{" "}
                    <i className="bi bi-star-fill"></i>{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-3 text-center px-4">
                  <div className="user-image">
                    {" "}
                    <img
                      src="https://i.imgur.com/ACeArwY.jpg"
                      className="rounded-circle"
                      width="80"
                    />{" "}
                  </div>
                  <div className="user-content">
                    <h5 className="mb-0">Veera Duncan</h5>{" "}
                    <span>Software Architect</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className="ratings">
                    {" "}
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>{" "}
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img src={ads1} alt="" width="100%" />
              </div>
              <div className="col-lg-6">
                <img src={ads2} alt="" width="100%" />
              </div>
            </div>
          </div>
        </section>
      </main>
     
    </div>
  );
};
export default Home;
