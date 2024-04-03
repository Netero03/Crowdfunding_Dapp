/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./BothRegistration.css";

import {
  Alert,
  Box,
  Button,
  CircularProgress,
  LinearProgress,
  Snackbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
// import auth3 from "../../assets/people-fundraising.svg";
// import auth2 from "../../assets/person.svg";
import auth1 from "../../assets/people-fundraising.svg";
import logo from "../../assets/logo.svg";
import { supabase } from "../../lib/helper/SupabaseClient";

const UserRegistration = () => {
  const [activeInput, setActiveInput] = useState(null);
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);
  const [showOptSec, setShowOptSec] = useState(false);
  const [showErrorSnack, setShowErrorSnack] = useState(false);
  const [showSuccessSnack, setShowSuccessSnack] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [getOTPInputs, setOTPInputs] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginformData, LoginSetFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowSuccessSnack(false);
    setShowErrorSnack(false);
  };

  const handleSigninChange = (e) => {
    const { name, value } = e.target;
    LoginSetFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    try {
      let { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        console.log(error.message);
      } else {
        setShowSuccessSnack(true);
        setSnackMsg("Signup successful! Check Your Email");


        // save user data in Users table
        const { data, error } = await supabase
          .from('Users')
          .insert([
            { email: formData.email, Full_name: formData.name },
          ])
          .select()

        if (error) { console.log(error) }
      }

    } catch (error) {
      console.log(error);
    }
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    try {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: loginformData.email,
        password: loginformData.password
      });

      if (error) {
        console.log(error);
        setShowSuccessSnack(true);
        setSnackMsg("Signin Failed " + error.message); // Use error.message instead of just error
      } else {
        setShowSuccessSnack(true);
        setSnackMsg("Signin successful");
        console.log(data);

        // Check if user is admin after successful authentication
        if ((loginformData.email === "jaiswalanshikaajay.7@gmail.com" || loginformData.email === "jatinletsgo@gmail.com") && loginformData.password === "Anshika@1234") {
          console.log("Admin");
          setShowSuccessSnack(true);
          setSnackMsg("Welcome Admin");
          setTimeout(() => {
            navigate('/admindashboard');
          }, 2000);
        } else {
          setTimeout(() => {
            navigate('/userhome');
          }, 3000);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };


  const handleBulletClick = (index) => {
    setActiveSlide(index);
  };

  const [backgroundColor, setBackgroundColor] = useState('bg-gradient-to-b from-[#9ad0c2] to-[#a9cfc5]');
  useEffect(() => {
    // Change background color after component is mounted
    setBackgroundColor('bg-gradient-to-b from-[#2D9596] to-[#a9cfc5]'); // Green color
  }, []);

  return (
    <>
      <main className={`${!isSignUpMode ? "sign-up-mode" : ""} transition-bg-color`} style={{ backgroundColor }}>
        <div className="box">
          <div className="inner-box">
            <div className="forms-wrap">
              {!isSignUpMode ? (
                <>
                  <form
                    onSubmit={handleSignInSubmit}
                    action="index.html"
                    autoComplete="off"
                    className="sign-up-form fillup-form"
                  >
                    <div className="logo">

                      <a className="font-bold text-2xl text-[#265073]">ChainRise</a>
                    </div>

                    <div className="heading">
                      <a
                        variant="h4" className="font-bold text-3xl"
                      >
                        Welcome User
                      </a>
                      <br></br>
                      <Typography mb={5} fontSize={"small"} variant="body4">
                        Not registered yet?{" "}
                        <a
                          href="#"
                          className="toggle2"
                          onClick={() => setIsSignUpMode(!isSignUpMode)}
                        >
                          Sign Up
                        </a>
                      </Typography>
                    </div>

                    <div className="actual-form">

                      <div className="input-wrap">
                        <input
                          placeholder="Your Name"
                          onChange={handleSigninChange}
                          type="text"
                          name="name"
                          className={`input-field ${activeInput === 0 ? "active" : ""
                            }`}
                          autoComplete="off"
                          required
                        />
                      </div>

                      <div className="input-wrap">
                        <input
                          placeholder="Email"
                          onChange={handleSigninChange}
                          type="email"
                          name="email"
                          className={`input-field ${activeInput === 0 ? "active" : ""
                            }`}
                          autoComplete="off"
                          required
                        />
                      </div>

                      <div className="input-wrap">
                        <input
                          placeholder="Password"
                          onChange={handleSigninChange}
                          type="password"
                          name="password"
                          className={`input-field ${activeInput === 1 ? "active" : ""
                            }`}
                          autoComplete="off"
                          required
                        />
                      </div>

                      {!showOptSec ? (
                        <>
                          <Box display={"flex"} gap={"30px"}>
                            <Button
                              type="submit"
                              className="sign-btn"
                              sx={{
                                backgroundColor: "#265073",
                                color: "white",
                                marginBottom: "10px",
                              }}
                            >
                              Sign In
                            </Button>
                            {isLoading ? <CircularProgress size={30} /> : ""}
                          </Box>
                        </>
                      ) : (
                        ""
                      )}

                      {!showOptSec ? (
                        <p className="text">
                          Forgot your password or you login details?
                          <a href="#"> Get help</a> signing in
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <form
                    action="index.html"
                    autoComplete="off"
                    className="sign-in-form fillup-form"
                    onSubmit={handleSignupSubmit}
                  >
                    <div className="logo">
                      <img src={logo} alt="easyclass" />
                      <Typography variant="h6">Chain Rise</Typography>
                    </div>

                    <div className="heading">
                      <Typography variant="h4">Get Started</Typography>
                      <Typography mb={2} variant="body3" fontSize={"small"}>
                        Already have an account?{" "}
                        <a
                          onClick={() => setIsSignUpMode(!isSignUpMode)}
                          className="toggle2"
                        >
                          Sign in
                        </a>
                      </Typography>
                    </div>

                    <div className="actual-form">
                      <div className="input-wrap">
                        <input
                          placeholder="Full Name"
                          onChange={handleChange}
                          type="text"
                          name="name"
                          minLength="4"
                          className="input-field"
                          autoComplete="off"
                          required
                        />
                      </div>

                      <div className="input-wrap">
                        <input
                          placeholder="Email"
                          onChange={handleChange}
                          type="email"
                          className="input-field"
                          autoComplete="off"
                          required
                          name="email"
                        />
                        {/* <label>Email</label> */}
                      </div>

                      <div className="input-wrap">
                        <input
                          placeholder="Password"
                          onChange={handleChange}
                          type="text"
                          name="password"
                          minLength="8"
                          className="input-field"
                          autoComplete="off"
                          required
                        />
                      </div>
                      {!showSuccessSnack && !showErrorSnack ? (
                        <>
                          <Box display={"flex"} gap={"30px"}>
                            <Button
                              type="submit"
                              value="Sign Up"
                              className="sign-btn"
                              sx={{
                                background: "#265073",
                                color: "white",
                                marginBottom: "10px",
                              }}
                            >
                              Sign Up
                            </Button>
                            {isLoading ? (
                              <CircularProgress
                                sx={{
                                  width: "60%",
                                  margin: "auto",
                                  marginTop: "10px",
                                }}
                              />
                            ) : (
                              ""
                            )}
                          </Box>
                        </>
                      ) : showSuccessSnack ? (
                        <Typography
                          variant="body1"
                          mb={3}
                          fontWeight={600}
                          color={"green"}
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"center"}
                        >
                          Signup Successful
                        </Typography>
                      ) : (
                        <Typography
                          variant="body1"
                          mb={3}
                          fontWeight={600}
                          color={"crimson"}
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"center"}
                        >
                          Signup Failed
                        </Typography>
                      )}
                      <p className="text">
                        By signing up, I agree to the
                        <a href="#"> Terms of Services</a> and
                        <a href="#"> Privacy Policy</a>
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
            <Snackbar
              open={showSuccessSnack || showErrorSnack}
              autoHideDuration={3100}
              onClose={() => handleClose()}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <Alert
                onClose={() => handleClose()}
                severity={"info"}
                sx={{ width: "100%" }}
              >
                {snackMsg}
              </Alert>
            </Snackbar>

            <div
              className="carousell"
            >
              <div className="images-wrapper">
                <img
                  src={auth1}
                  className={`image img-1 ${activeSlide === 1 ? "show" : ""}`}
                  alt=""
                />
              </div>

              <div className="text-slider">
                <div className="text-wrap">
                  <div style={{ color: "black" }} className="text-group">
                    {activeSlide === 1 && (
                      <>
                        <Typography color={"black"} variant="h6">
                          A better way for a transparent donation
                        </Typography>
                      </>
                    )}
                    {activeSlide === 2 && (
                      <>
                        <Typography color={"#fff"} variant="h6">
                          The Future of Charity
                        </Typography>
                      </>
                    )}
                    {activeSlide === 3 && (
                      <>
                        <Typography color={"#fff"} variant="h6">
                          Easy and simple Interface
                        </Typography>
                      </>
                    )}
                  </div>
                </div>

                <div className="bullets">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <span
                      key={index + 1}
                      className={activeSlide === index + 1 ? "active" : ""}
                      onClick={() => handleBulletClick(index + 1)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default UserRegistration;