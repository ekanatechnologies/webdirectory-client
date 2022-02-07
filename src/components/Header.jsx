import React from "react";
import Logo from "../img/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { nav_links } from "./links";
import Auth from "./Auth";
import avatar from "../img/avatar.png";

const Header = ({
  isLogin,
  isRegister,
  setIsLogin,
  setIsRegister,
  show,
  setShow,
  user,
  setUser,
}) => {
  const [links, setLinks] = React.useState(nav_links);
  const [active, setActive] = React.useState(null);
  const navigate = useNavigate();

  const handleClick = (id) => {
    setActive(id);
  };
  const handleClickSignin = () => {
    setShow(true);
    setIsRegister(false);
    setIsLogin(true);
  };
  const handleClickRegister = () => {
    setShow(true);
    setIsLogin(false);
    setIsRegister(true);
  };
  const handleListing = () => {
    if (user) {
      setShow(false);
      navigate("/dev/add-listing");
    } else {
      setShow(true);
      setIsLogin(true);
      setIsRegister(false);
    }
  };
  console.log("in header ", user);

  return (
    <div>
      <Auth
        show={show}
        setShow={setShow}
        isRegister={isRegister}
        setIsRegister={setIsRegister}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        setUser={setUser}
      />
      <section id="topbar" className="d-flex align-items-center ">
        <div className="container-fluid d-flex justify-content-center justify-content-md-between mx-3">
          {/* <div className="social-links d-none d-md-flex align-items-center justify-content-between"> */}
          <h1 className="logo">
            <Link to="/">
              <img
                src={Logo}
                height={100}
                width={350}
                style={{ objectFit: "contain" }}
              />
            </Link>
          </h1>
          <div className=" d-flex align-items-center justify-content-between"></div>
          <div className="social-links d-none d-md-flex align-items-center">
            {user ? (
              <div className="mx-4 d-flex align-items-center  justify-content-center">
                <div className="d-flex flex-column align-items-center mt-4">
                <img src={avatar} alt="Avatar" className="avatar mx-2" />
                <p className="text-success">User_name</p>
                </div>

                <button className="btn btn-warning" onClick={() => { setUser(null)}}>
                  <i class="bi bi-box-arrow-right"></i> 
                </button>
              </div>
            ) : (
              <>
                
                <a
                  href="#"
                  className=" text-black mt-3 mx-3 "
                  onClick={handleClickSignin}
                >
                  <i
                    className="bi bi-box-arrow-right px-1"
                    style={{ color: "#f38e35" }}
                  ></i>
                  &nbsp;Sign In
                </a>
                <a
                  href="#"
                  className=" text-black mt-3 mx-3 "
                  onClick={handleClickRegister}
                >
                  <i className="bi bi-person" style={{ color: "#f38e35" }}></i>
                  &nbsp; Register
                </a>
              </>
            )}

            <button
              to="/dev/add-listing"
              className="add-list btn"
              onClick={handleListing}
            >
              Add Listing{" "}
              <span>
                <i className="bi bi-layers-fill"></i>
              </span>
            </button>
          </div>
        </div>
      </section>

      <header id="header" className="d-flex align-items-center">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <nav id="navbar" className="navbar">
            <ul className="d-flex align-items-center justify-content-between text-center">
              {links?.map((link) => (
                <li>
                  <Link
                    className={
                      link.className + (link.id === active ? " active" : "")
                    }
                    to={link.to}
                    onClick={() => handleClick(link.id)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
