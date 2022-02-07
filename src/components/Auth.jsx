import React from "react";
import { Modal, CloseButton } from "react-bootstrap";
import "./auth.css";
import axios from 'axios'
import BarLoader from "react-spinners/BarLoader";
import { css } from "@emotion/react";
const override = css`
  display: block;
`;

const Auth = ({
  show,
  setShow,
  isLogin,
  setIsLogin,
  isRegister,
  setIsRegister,
  setUser,
}) => {
  const [inputData, setInputData] = React.useState({
    email: "",
    password: "",
    userName: "",
  });
  const [loading,setLoading]=React.useState(false)

  const handleSetLogin = () => {
    setIsRegister(false);
    setIsLogin(true);
  };
  const handleSetRegister = () => {
    setIsLogin(false);
    setIsRegister(true);
  };
  const handleAuth = async (e) => {
    e.preventDefault();
    try {
        if(isLogin){
            console.log(inputData)
            setLoading(true)
            const res = await axios.post('http://localhost:5000/api/v1/auth/login', inputData)
            setUser(res.data)
            setTimeout(() => {
                setLoading(false)
                
            }, 2000);
            setShow(false);

        } else if(isRegister){
            setLoading(true)
            const res = await axios.post('http://localhost:5000/auth', inputData)
            setTimeout(() => {
                setLoading(false)
                
            }, 2000);
        }           
            
        else{
            return
        }
    } catch (error) {
      console.log(error);
      alert('Login Failed')
      setLoading(false)
    }
  };
  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      dialogClassName="modal-30w"
      aria-labelledby="example-custom-modal-styling-title"
      centered
    >
      <Modal.Header
        closeButton
        className="modal_title"
        onClick={() => setShow(false)}
      >
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="text-center"
          style={{ fontSize: "17px", fontWeight: "bold" }}
        >
          Welcome to{" "}
          <span style={{ color: "#f38e35" }}>
            <stong>WEBDIRECTORIES</stong>{" "}
          </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <div class="container-fluid d-flex justify-content-center align-items-center mt-5" >
          <ul
            className="d-flex align-items-center justify-content-between"
            style={{ width: "100%" }}
          >
            <li
              className={`d-flex align-items-center justify-content-center  custom-border ${
                isLogin ? "active" : " "
              }`}
            >
              <a
                href="#"
                className=" mt-3 mx-3  px-4 custom-tab"
                onClick={handleSetLogin}
              >
                <i
                  class="bi bi-box-arrow-right mx-1"
                  style={{ color: "#f38e35" }}
                ></i>
                &nbsp;Sign In
              </a>
            </li>
            <li
              className={`d-flex align-items-center justify-content-center custom-border ${
                isRegister ? "active" : " "
              }`}
            >
              <a
                href="#"
                className="custom-tab mt-3 mx-3 px-4"
                onClick={handleSetRegister}
              >
                <i className="bi bi-person" style={{ color: "#f38e35" }}></i>
                &nbsp; Register
              </a>
            </li>
          </ul>
        </div>

        <div className="tab_container">
          <div className="custom-form">
            <form onSubmit={handleAuth}>
              {isLogin && (
                <div class="form-group my-4">
                  <label className="custom-form-label">
                    Username or Email Address*
                  </label>
                  <input
                    type="text"
                    class=" custom_input mt-1 "
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={(e) =>setInputData({...inputData, email: e.target.value})}
                  />
                </div>
              )}
              {isLogin && (
                <div class="form-group my-4">
                  <label> Password*</label>
                  <input
                    type="password"
                    class="custom_input mt-1"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={(e) =>setInputData({...inputData, password: e.target.value})}
                  />
                </div>
              )}
              {isRegister && (
                <div class="form-group my-4">
                  <p style={{}}>Account details will be confirmed via email.</p>
                  <label className="custom-form-label">Username *</label>
                  <input
                    type="text"
                    class=" custom_input my-2 "
                    placeholder="Enter username"
                    onChange={(e) =>setInputData({...inputData, userName: e.target.value})}
                  />
                  <p
                    className="mt-1"
                    style={{ color: "#878C9F", fontSize: "12px" }}
                  >
                    You can use letters, numbers and periods and at least 6
                    characters or more
                  </p>
                </div>
              )}
              {isRegister && (
                <div class="form-group my-4">
                  <label className="custom-form-label">Email Address *</label>
                  <input
                    type="email"
                    class=" custom_input my-1 "
                    placeholder="Enter email"
                    onChange={(e) =>setInputData({...inputData, email: e.target.value})}
                  />
                  <p
                    className="mt-1"
                    style={{ color: "#878C9F", fontSize: "12px" }}
                  >
                    Make sure to enter all lowercase letters for your email
                    address
                  </p>
                </div>
              )}
              
              {isRegister && (
                <div class="form-group my-4">
                  <label className="custom-form-label">Password *</label>
                  <input
                    type="password"
                    class=" custom_input my-1 "
                    placeholder="Create password"
                    onChange={(e) =>setInputData({...inputData, password: e.target.value})}
                  />
                </div>
              )}
              {
                  loading? <BarLoader color={'#36D7B7'} css={override} loading={loading} height={50} size={100} />:
                  (

              <button
                type="submit"
                className="btn btn-fill py-2 px-3 my-2"
                style={{ background: "#5ECFB1" }}
              >
                {isLogin ? "Login" : "Register"}
              </button>
                  )

              }

              <div class="form-group form-check mt-3">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Remember me
                </label>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
      
    </Modal>
  );
};

export default Auth;
