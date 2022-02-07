import React from 'react';
import axios from 'axios';

const AddListing = ({user}) => {

    const [loading,setLoading]=React.useState(false)
    const [inputData, setInputData] = React.useState({businessName:'',listingtype:" ", website:" ",websiteURL:'',address:'',email:" ",phone:'',description:''})

    const handleChange=(e)=>{
        setInputData({...inputData,[e.target.name]:e.target.value})
    }

    const handleSubmit= async (e)=>{
        e.preventDefault()
       try {
           const res=  await axios.post('http://localhost:5000/api/v1/listing',{...inputData,user:user})
           setInputData({businessName:'',listingtype:" ", website:" ",websiteURL:'',address:'',email:" ",phone:'',description:''})

                
       } catch (error) {    
           console.log(error)
           
       }
    }

  return (
  <div>
      
      <div class="container">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Your Feed</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Edit Profile</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Change Password</span>
                        </a>
                    </li>
                    {/* <li>
                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                        <ul class="collapse  nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1 </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2 </a>
                            </li>
                        </ul>
                    </li> */}
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">My Listing</span></a>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Bookmark</span></a>
                        
                    </li>
                    
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Add Listing</span> </a>
                    </li>
                </ul>
                <hr/>
                <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle"/>
                        <span class="d-none d-sm-inline mx-1">loser</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider"/>
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col py-3">
            <h2>Add Listing</h2>
        <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Business Title</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='businessName' value={inputData.businessName} onChange={handleChange}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Website url</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='websiteURL' onChange={handleChange}/>
    
  </div>
  <div className="row">
      <div className="col-lg-6">
      <label for="exampleInputEmail1" class="form-label">Type/Category</label>
      <select class="form-select mb-3" aria-label=".form-select-lg example" name='listingType' onChange={handleChange}>
  <option selected >Select Listing Type</option>
  <option value="Free">Free </option>
  <option value="Paid">Paid</option>
  <option value="Trusted">Trusted </option>
  <option value="Niche">Niche </option>

</select>
      </div>

      <div className="col-lg-6">
      <label for="exampleInputEmail1" class="form-label">Address</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='address' onChange={handleChange}/>
      </div>
  </div>
  <div className="row mb-3">
      <div className="col-lg-4">
      <label for="exampleInputEmail1" class="form-label">Email Address</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={handleChange}/>
      </div>

      <div className="col-lg-4">
      <label for="exampleInputEmail1" class="form-label">Phone</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='phone' onChange={handleChange}/>
      </div>
      <div className="col-lg-4">
      <label for="exampleInputEmail1" class="form-label">Website</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='website' onChange={handleChange}/>
      </div>
  </div>
  <h2 className=''>Details</h2>
  <div class="mb-3">
    {/* <label for="exampleInputPassword1" class="form-label">Website</label> */}
    <textarea className='form-control' name='description' onChange={handleChange}/>
  </div>
  
  <button type="submit" class="btn bbtn btn-primary">Submit</button>
</form>
        </div>
    </div>
</div>
      <div className="col-lg-4"></div>
      <div className='col-lg-8'>
      
      </div>
  </div>
  );
};

export default AddListing;
