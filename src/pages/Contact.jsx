import React from "react";

export const Contact = () => {
  return (
    <div className="container-fluid" style={{ background: "#f6f6f6" }}>
      <div className="d-flex align-items-center justify-content-center">
        <div
          className="d-flex align-items-center justify-content-start px-1 py-1 bg-white my-2"
          style={{ width: "80%" }}
        >
          <h5 className="text-secondary text-center mx-2">Home</h5>
          <span style={{ color: "#f38e35" }}>
            <i class="bi bi-caret-right mx-1"></i>
          </span>

          <p className="mt-3">Contact Us</p>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center mt-2">
        <div style={{ width: "80%" }} className="mb-5 d-flex ">
          <div
            className="my-3 d-flex flex-column align-items-center justify-content-start"
            style={{ flex: "0.6" }}
          >
            <div
              className="bg-white py-4 d-flex flex-column justify-content-center"
              style={{ width: "100%" }}
            >
              <h5
                className="text-center text-secondary mt-2 text-left"
                style={{ fontWeight: "bold" }}
              >
                Contact Us
                <hr />
              </h5>
              <small
                className="text-left text-secondary mt-2 py-4 px-4  text-left"
                style={{ fontWeight: "300" }}
              >
                Hi There, <br /> We are looking forward to hearing from you.
                Please feel free to get in touch via the form below, we will get
                back to you as soon as possible.
                <br /> <br /> Web Directories <br /> 123 Main St,
                <br />
                Warwick, RI 02889 <br />
                718.555.0062
              </small>
              {/* form  */}
              <div className="container">
              <form>
                <div className="form-group my-4">
                  <input
                    type="email"
                    class="form-control myInput"
                    id="exampleFormControlInput1"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group my-4">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Email Address"
                    className="myInput"
                  />

                </div>
              
                
                <div class="form-group">
                 
                  <textarea
                    class="form-control myInput"
                    id="exampleFormControlTextarea1"
                    placeholder="Your message"
                    rows="3"
                  ></textarea>
                </div>
              </form>
              <div>
                <button className="btn  btn-block my-4" style={{background:'#5ECFB1',color:'#fff'}}>
                  Send Message
                </button>
              </div>
              </div>
            </div>
          </div>

          <div
            className="d-flex flex-column"
            style={{ flex: "0.4", background: "#f6f6f6" }}
          >
            <div
              className=" d-flex flex-column mx-5  px-4 py-5 bg-white rounded"
              style={{ width: "90%" }}
            >
              <h5 className="text-center">Recent Post</h5>
              <hr />
              <div className="text-center  mx-2">
                <h6 style={{ fontWeight: "400", color: "#f38e35" }}>
                  A review of Joeant.com, a leading Web directory since 2001
                </h6>
                <h6 style={{ fontWeight: "400", color: "#f38e35" }}>
                  Powerball by WebDirectories.info with Jeff Jacobs keyboard
                  player from Foreigner on vocals
                </h6>{" "}
                <h6 style={{ fontWeight: "400", color: "#f38e35" }}>
                  4 of the best e-liquids
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
