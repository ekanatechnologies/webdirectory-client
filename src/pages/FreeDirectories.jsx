import React from "react";

const FreeDirectories = () => {
  return (
    <div style={{ background: "#f6f6f6" }}>
      <section id="hero" className="d-flex align-items-center">
        <div
          className="container hero-banner text-center"
          data-aos="zoom-out"
          data-aos-delay="100"
        >
          <h3 className="text-white font-weight-bold text-center">
            Submit your Web site to these 39 free directories to gain a higher
            ranking in Google (last updated 04/23/2020)
          </h3>
          <div className="mt-3 d-flex align-items-center justify-content-center">
            <h4 className="text-center text-secondary">Home</h4>
            <span style={{ color: "#f38e35" }}>
              <i class="bi bi-caret-right mx-1"></i>
            </span>
            <a className="text-white text-bold">
              Submit your Web site to these 39 free directories to gain a higher
              ranking in Google (last updated 04/23/2020)
            </a>
          </div>
        </div>
      </section>
      <div className="d-flex align-items-center justify-content-center py-3">
        <div
          className="d-flex align-items-center justify-content-start py-3 px-3 "
          style={{ width: "80%", background: "#fff" }}
        >
          <strong className="mr-2 text-center" style={{ paddingRight: "5px" }}>
            Home
            <span style={{ color: "#f38e35" }}>
              <i class="bi bi-caret-right"></i>
            </span>
          </strong>{" "}
          Submit your Web site to these 39 free directories to gain a higher
          ranking in Google (last updated 04/23/2020)
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center mt-2">
        <div style={{ width: "80%" }} className="mb-5 d-flex ">
          <div
            className="my-3 d-flex flex-column align-items-center justify-content-start "
            style={{ flex: "0.6" }}
          >
            <div
              className="bg-white py-4 d-flex flex-column align-items-center justify-content-center"
              style={{ width: "100%" }}
            >
              <div className="py-3 px-2 d-flex align-items-center justify-content-center">

              <p className="text-center text-secondary font-weight-bold px-4 py-5" style={{fontSize:'14px' ,lineHeight:'30px'}}>
                If you want a new Web directory to be added to this list, leave a
                comment with the site’s URL, and it will be reviewed and
                considered for inclusion. Directory submission is a off-page SEO
                tactic. The key to successful improvement in the search engines
                is not to submit your site to thousands of low quality sites.
                Rather by submitting to a limited number of quality directories
                like the ones on this list, you are ensuring the search engines
                don’t associate your site with spam.
              </p>
              </div>
            </div>
            {/* next card */}
            <div
              className="bg-white py-4  px-3 mt-5 d-flex flex-column  justify-content-center"
              style={{ width: "100%" }}
            >
           <h4 style={{fontSize:'1.154rem',fontWeight:'600',color:'#566985'}}>Add Comment</h4>
           <p className="font-weight-bold text-secondary">Your email is safe with us.</p>

           <div className="container">
           <form>
  <div class="form-group">
  <div class="form-group ">
    <textarea class="form-control myInput customArea" id="exampleFormControlTextarea1" rows="3" placeholder="Your Comment :"></textarea>
  </div>
  <div className="d-flex align-items-center justify-content-between">

    <input type="email" class="form-control myInput" id="exampleFormControlInput1" placeholder="Your Name *" style={{marginRight:'10px'}}/>
    <input type="email" class="form-control myInput" id="exampleFormControlInput1" placeholder="Your Email *" style={{marginLeft:'10px'}}/>

  </div>
  <input type="checkbox" checked  className="mt-5 mx-2"/>
  <span className="text-secondary font-weight-bold">Save my name, email, and website in this browser for the next time I comment.</span>
  </div>
  <button type="submit" class="btn mt-3 px-2 py-2 font-weight-bold" style={{background:'#5ECFB1',color:'#fff',fontSize:'15px'}}>Submit Comment</button>
 
  
</form>
           </div>
            </div>

            {/* End of cards */}
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

export default FreeDirectories;
