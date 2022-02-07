import React from 'react';

const NicheDirectories = () => {
  return (
    <div style={{background:'#f6f6f6'}}>
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container hero-banner text-center"
        data-aos="zoom-out"
        data-aos-delay="100"
      >
        <h3 className="text-white font-weight-bold text-center">
          Niche Directory List
        </h3>
        <div className="mt-3 d-flex align-items-center justify-content-center">
          <h4 className="text-center text-secondary">Home</h4>
          <span style={{ color: "#f38e35" }}>
            <i class="bi bi-caret-right mx-1"></i>
          </span>
          <a className="text-white text-bold">
            Niche Directory List
          </a>
        </div>
      </div>
    </section>
    <div className='d-flex align-items-center justify-content-center flex-column'>
     <div className="d-flex align-items-center justify-content-start px-1 py-1 bg-white my-2" style={{width:'80%'}}>
     <h4 className='text-secondary text-center'>Home</h4>
     <span style={{ color: "#f38e35" }}>
            <i class="bi bi-caret-right mx-1"></i>
     </span>
     
      <p className='mt-3'>Niche Directory List</p>
     </div>
     <div className="d-flex align-items-center justify-content-center mt-2">
        <div style={{ width: "80%" }} className="mb-5 d-flex ">
          <div className="my-3 d-flex flex-column align-items-center justify-content-center  py-4" style={{flex:'0.6',background:'#fff'}}>
            <p className='text-center px-3'>A list of niche Web directories on the internet.

            If you want your niche directory added to this list send a payment of $179 to webmaster@directoryfire.com via paypal and it will be reviewed.</p>
            
          </div>
          <div className="d-flex flex-column" style={{flex:'0.4'}}>
            <div className=" d-flex flex-column mx-5 my-3 bg-white rounded" style={{height:'100%' ,width:'90%',background:'#fff'}}>
              <h3 className="text-center mt-2">Recent Post</h3>
              <hr />
              <div className="text-center px-4 mx-2">
                <h6 className="text-secondary" style={{fontWeight:'700'}}>A review of Joeant.com, a leading Web directory since 2001</h6>
                <div className="d-flex justify-content-center ">
                <span className="mx-1 " style={{color:'#f38e35'}}><i class="bi bi-calendar"></i></span>
                <p><small>December 28, 2020 0 Comments</small> </p>
              </div>
              <div className="text-center px-4 mx-2 mt-2">
                  <h6 className="text-secondary" style={{fontWeight:'700'}}>Powerball by WebDirectories.info with Jeff Jacobs keyboard player from Foreigner on vocals</h6>
                  <div className="d-flex justify-content-center ">
                  <span className="mx-1 " style={{color:'#f38e35'}}><i class="bi bi-calendar"></i></span>
                  <p><small>December 28, 2020 0 Comments</small> </p>
              </div>
              
              
              </div>
              
              </div>

            </div>
          </div>
        </div>
      </div>
    
    </div>
    
  </div>
  );
};

export default NicheDirectories;
