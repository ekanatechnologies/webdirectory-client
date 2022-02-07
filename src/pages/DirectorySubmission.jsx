import React from "react";

const DirectorySubmission = () => {
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

          <p className="mt-3">
            Web Directories announces our paid directory submission service
          </p>
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
                className="text-center text-secondary mt-2"
                style={{ fontWeight: "bold" }}
              >
                Web Directories announces our paid directory submission service
                <hr />
              </h5>
              <small
                className="text-center text-secondary mt-2 py-4 px-4  text-left"
                style={{ fontWeight: "300" }}
              >
                For $59 we will submit your Web site by-hand to over 50 high
                quality Web directories, includes a free link on our paid Web
                directory, DirectoryFire.com. At the end of the submission
                process you will receive a email with a excel report detailing
                which directories your site was submitted to. We are highly
                skilled and are able to ensure your Web site will be submitted
                at a very high acceptance rate. We write several different
                descriptions for your Web site when we submit to the directories
                to create a natural looking profile ensuring your success.
              </small>
              <a className="mx-4 text-black " href="http://paypal.me/webdirectories" >http://paypal.me/webdirectories</a>
              <p className="mx-4" style={{fontWeight:'300 mt-2'}}>Buy Web directory submission  service for $59 via PayPal</p>

             
            </div>
            {/* next card */}
          </div>

          <div
            className="d-flex flex-column"
            style={{ flex: "0.4", background: "#f6f6f6" }}
          >
            <div
              className=" d-flex flex-column mx-5 my-3 px-4 py-5 bg-white rounded"
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

export default DirectorySubmission;
