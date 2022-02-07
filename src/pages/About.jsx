import React from "react";
import ads1 from "../img/ads1.png";
import ads2 from "../img/ads2.png";
import aboutImg from "../img/aboutImg.jpg";
import emp1 from "../img/emp1.jpg";
import emp2 from "../img/emp2.jpg";

import "../style.css";

const About = () => {
  return (
    <div>
      <section id="hero" className="container-fluid d-flex align-items-center">
        <div
          className="container hero-banner text-center"
          data-aos="zoom-out"
          data-aos-delay="100"
        >
          <h2 className="text-center text-white">About</h2>
          <div className="d-flex align-items-center justify-content-center">
            <a className="text-bold mx-2">Home</a>
            <i class="bi bi-caret-right "></i>
            <a className="text-bold ">About</a>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="about" className="about section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title d-flex ailgn-items-center justify-content-center flex-column">
              <h3 className="h4" style={{ fontFamily: "Raleway" }}>
                How We Work
              </h3>
              <div className="d-flex justify-content-center mt-2">
                <div
                  className=" px-2 py-1 rounded"
                  style={{ width: "50px", background: "#f38e35" }}
                />
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <div
                className=" d-flex align-items-center justify-content-around"
                style={{ width: "90%" }}
              >
                <div className="image__container ">
                  <img
                    src={aboutImg}
                    alt=""
                    height={350}
                    width={500}
                    className="about__img"
                  />
                </div>
                <div
                  className="d-flex flex-column align-items-center justify-content-center "
                  style={{ paddingLeft: "10px" }}
                >
                  <h1 className="h2 text-center">Our Awesome Team Story</h1>
                  <p className="text-center">
                    Check video presentation to find out more about us .
                  </p>
                  <p className="text-center">
                    Ut euismod ultricies sollicitudin. Curabitur sed dapibus
                    nulla. Nulla eget iaculis lectus. Mauris ac maximus neque.
                    Nam in mauris quis libero sodales eleifend. Morbi varius,
                    nulla sit amet rutrum elementum, est elit finibus tellus, ut
                    tristique elit risus at metus. Sed tempor iaculis massa
                    faucibus feugiat. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Maecenas in pulvinar neque. Nulla finibus
                    lobortis pulvinar. Donec a consectetur nulla. Nulla posuere
                    sapien vitae lectus suscipit, et pulvinar nisi tincidunt.
                    Curabitur convallis fringilla diam sed aliquam. Sed tempor
                    iaculis massa faucibus feugiat. In fermentum facilisis
                    massa, a consequat purus viverra. Aliquam erat volutpat.
                    Curabitur convallis fringilla diam sed aliquam. Sed tempor
                    iaculis massa faucibus feugiat. In fermentum facilisis
                    massa.
                  </p>
                  <div>
                    <a
                      className="btn btn-fill btn-warning p-2 "
                      style={{ backgroundColor: "#6ec1e4" }}
                      href="#"
                    >
                      {" "}
                      Our Team{" "}
                      <span className="text-danger">
                        <i class="bi bi-people"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container d-flex align-items-center justify-content-around">
            <div className="d-flex align-items-center justify-content-center flex-column">
              <h1 className="about_heading">1254</h1>
              <p className="about_text">New visitors every weeks</p>
            </div>
            <div className="d-flex align-items-center justify-content-center flex-column">
              <h1 className="about_heading">12168</h1>
              <p className="about_text">Happy customers every year</p>
            </div>
            <div className="d-flex align-items-center justify-content-center flex-column">
              <h1 className="about_heading">172</h1>
              <p className="about_text">Won Awards</p>
            </div>
            <div className="d-flex align-items-center justify-content-center flex-column">
              <h1 className="about_heading">1254</h1>
              <p className="about_text">New Listing Every Week</p>
            </div>
          </div>
        </section>
        {/* <section id="counts" className="counts">
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
        </section> */}
        <section
          id="services"
          className="services"
          style={{ backgroundColor: "#f6f6f6" }}
        >
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h3 className="h4" style={{ fontFamily: "Raleway" }}>
                Working Process
              </h3>
              <div className="d-flex justify-content-center mt-2">
                <div
                  className=" px-2 py-1 rounded"
                  style={{ width: "50px", background: "#f38e35" }}
                />
              </div>
              <p className="" style={{ color: "#7d93b2", fontSize: "1em" }}>
                {" "}
                Morbi varius, nulla sit amet rutrum elementum, est elit finibus
                tellus, ut tristique elit risus at metus. Sed tempor iaculis
                massa faucibus feugiat.
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
                    <h2 className="h2">
                      <i className="">1</i>
                    </h2>
                  </div>
                  <h4>Developing an effective strategy</h4>
                  <p>
                    Maecenas faucibus non tellus eu ultricies. Vivamus lacinia
                    ultrices nulla sit amet venenatis.
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
                    <h2 className="h2">
                      <i className="">2</i>
                    </h2>
                  </div>
                  <h4>Website development and integration</h4>
                  <p>
                    Maecenas faucibus non tellus eu ultricies. Vivamus lacinia
                    ultrices nulla sit amet venenatis.
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
                    <i className="">3</i>
                  </div>
                  <h4>
                    <a href="">Testing and professional support</a>
                  </h4>
                  <p>
                    Maecenas faucibus non tellus eu ultricies. Vivamus lacinia
                    ultrices nulla sit amet venenatis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section>
          <div className="container text-center">
            <img src={ads1} alt="" width="80%" />
          </div>
        </section> */}
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
        <section
          id="services"
          className="services"
          style={{ backgroundColor: "#f6f6f6" }}
        >
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h3 className="h4" style={{ fontFamily: "Raleway" }}>
                Our Team
              </h3>
              <div className="d-flex justify-content-center mt-2">
                <div
                  className=" px-2 py-1 rounded"
                  style={{ width: "50px", background: "#f38e35" }}
                />
              </div>
              <p className="" style={{ color: "#7d93b2", fontSize: "1em" }}>
                {" "}
                Morbi varius, nulla sit amet rutrum elementum, est elit finibus
                tellus, ut tristique elit risus at metus. Sed tempor iaculis
                massa faucibus feugiat.
              </p>
            </div>

            <div className="d-flex align-items-center justify-content-center mt-5">
              <div class="card mx-5" style={{ width: "350px" }}>
                <img
                  class="card-img-top "
                  src={emp1}
                  alt="Card image"
                  style={{ width: "100%" }}
                />
                <div class="card-body">
                  <h5
                    class="card-title"
                    style={{ color: "#666", fontWeight: "600" }}
                  >
                    Jane Doe
                  </h5>
                  <p class="card-text">
                    Some example text some example text. Jane Doe is an
                    architect and engineer
                  </p>
                  <a
                    href="#"
                    class="btn btn-warning btn-fill d-flex align-items-center justify-content-around"
                    style={{
                      background: "#fff",
                      color: "#f38e35",
                      width: "45%",
                      border: "1px solid #eee",
                      borderTopRightRadius: "20px",
                      borderBottomRightRadius: "20px",
                    }}
                  >
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-whatsapp"></i>
                  </a>
                </div>
              </div>
              <div class="card" style={{ width: "350px" }}>
                <img
                  class="card-img-top"
                  src={emp2}
                  alt="Card image"
                  style={{ width: "100%" }}
                />
                <div class="card-body">
                  <h4 class="card-title">Jane Doe</h4>
                  <p class="card-text">
                    Some example text some example text. Jane Doe is an
                    architect and engineer
                  </p>
                  <a
                    href="#"
                    class="btn btn-warning btn-fill d-flex align-items-center justify-content-around"
                    style={{
                      background: "#fff",
                      color: "#f38e35",
                      width: "45%",
                      border: "1px solid #eee",
                      borderTopRightRadius: "20px",
                      borderBottomRightRadius: "20px",
                    }}
                  >
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-whatsapp"></i>
                  </a>
                </div>
              </div>
              <div class="card mx-5" style={{ width: "350px" }}>
                <img
                  class="card-img-top"
                  src={emp1}
                  alt="Card image"
                  style={{ width: "100%" }}
                />
                <div class="card-body">
                  <h4 class="card-title">Austin Evon</h4>
                  <p class="card-text">
                    Some example text some example text. Jane Doe is an
                    architect and engineer
                  </p>
                  <a
                    href="#"
                    class="btn btn-warning btn-fill d-flex align-items-center justify-content-around"
                    style={{
                      background: "#fff",
                      color: "#f38e35",
                      width: "45%",
                      border: "1px solid #eee",
                      borderTopRightRadius: "20px",
                      borderBottomRightRadius: "20px",
                    }}
                  >
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid pt-5">

          <section id="hero2" className="d-flex align-items-center">
            <div
              className="container hero-banner2 text-center"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              <h1>why choose us</h1>
              <h4 className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec
                tincidunt arcu, sit amet fermentum sem.
              </h4>
              <div className="d-flex text-center justify-content-center">
                <a href="#about" className="btn-get-started scrollto">
                  <i className="bi bi-play-circle-fill"></i> Promo Video
                </a>
              </div>
            </div>
          </section>
          <div className="d-flex align-items-center justify-content-center">
            <div className="my_wrapper">
              <div className="my_layer">
              <div className="icon text-center" style={{color:'#f38e35',fontSize:'40px'}}>
              <i class="bi bi-headset"></i>
                </div>
                <h2 className="text-center">24 Hours support</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                </p>
              </div>
            </div>
            <div className="my_wrapper">
              <div className="my_layer">
                <div className="icon text-center" style={{color:'#f38e35',fontSize:'40px'}}>
                <i class="bi bi-award-fill"></i>
                </div>
                <h2 className="text-center">Admin Panel</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                </p>
              </div>
            </div>
            <div className="my_wrapper">
              <div className="my_layer">
              <div className="icon text-center" style={{color:'#f38e35',fontSize:'40px'}}>
              <i class="bi bi-phone"></i>
                </div>
                <h2 className="text-center">Modifiy friendly</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                </p>
              </div>
            </div>
          </div>
          </div>

        </section>
        <section style={{padding:'0px',margin:'0px'}}>
          <div className="section-title " >
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

export default About;
