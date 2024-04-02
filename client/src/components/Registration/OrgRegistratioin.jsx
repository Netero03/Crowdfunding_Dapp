/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./BothRegistration.css";

import axios from "axios";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Snackbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import auth1 from "../../assets/people-fundraising-org.svg";
import logo from "../../assets/logo.svg";
import { supabase } from "../../lib/helper/SupabaseClient";


const OrgRegistration = () => {
  const [activeInput, setActiveInput] = useState(null);
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);
  const [showOptSec, setShowOptSec] = useState(false);
  const [showErrorSnack, setShowErrorSnack] = useState(false);
  const [showSuccessSnack, setShowSuccessSnack] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const [getOTPInputs, setOTPInputs] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gstin: "",
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
  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
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
        password: formData.password
      });

      if (error) {
        console.log(error);
        setShowSuccessSnack(true);
        setSnackMsg("SignUp Failed " + error.message);
      } else {

        setShowSuccessSnack(true);
        setSnackMsg("Signup successful , Check Your Email to confirm Verification");
        console.log(data);
        setTimeout(()=>{
        navigate('/approvalform')
        },2000)
      }

    } catch (e) { console.log(e); }
    // axios
    //   .post("https://crowdfunding-dapp-drab.vercel.app/registrationpage", {
    //     ...formData,
    //     userType: "ORG",
    //   })
    //   .then((res) => {
    //     if (res.data.signup) {
    //       setShowSuccessSnack(true);
    //       setSnackMsg("Signup successful");
    //       setTimeout(() => {
    //         document.querySelector(".toggle2").click();
    //       }, 2000);
    //     } else console.log(res.data.error);
    //   })
    //   .catch((err) => console.log(err));
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    try {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: loginformData.email,
        password: loginformData.password
      });
     
    //   let { data: Organizations, error1 } = await supabase
    //  .from('Organizations')
    //  .select('status')

    //  if(Organizations.status==='Pending')

      if (error) {
        console.log(error);
        setShowSuccessSnack(true);
        setSnackMsg("Signin Failed " + error.message); // Use error.message instead of just error
      } else {
        setShowSuccessSnack(true);
        setSnackMsg("Signin successful");
        setTimeout(() => {
          navigate("/home")
        }, 2000);
        console.log(data);
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  const handleOtp = (e) => {
    setOTPInputs(Number(e.target.value));
  };

  const handleBulletClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <>
      <main className={!isSignUpMode ? "sign-up-mode" : ""}>
        <div className="box">
          <div className="inner-box">
            <div className="forms-wrap">
              {!isSignUpMode ? (
                <>
                  <form
                    action="index.html"
                    autoComplete="off"
                    className="sign-up-form fillup-form"
                    onSubmit={handleSignInSubmit}
                  >
                    <div className="logo">

                      <a className="font-bold text-2xl text-[#265073]">ChainRise</a>
                    </div>

                    <div className="heading">
                      <a
                        variant="h4" className="font-bold text-3xl"
                      >
                        Welcome, Establishment
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
                          placeholder="Email"
                          onChange={handleSigninChange}
                          type="email"
                          name="email"
                          className={`input-field ${activeInput === 0 ? "active" : ""
                            }`}
                          autoComplete="off"
                          required
                        />
                        {/* <label>Name</label> */}
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
                        {/* <label>Password</label> */}
                      </div>

                      {showOptSec ? (
                        <>
                          <div className="input-wrap">
                            <input
                              placeholder="OTP"
                              onChange={handleOtp}
                              type="number"
                              minLength="6"
                              name="otp"
                              className={`input-field ${activeInput === 1 ? "active" : ""
                                }`}
                              autoComplete="off"
                              required
                            />
                            {/* <label>Password</label> */}
                          </div>
                        </>
                      ) : (
                        <></>
                      )}

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
                      <Typography variant="h6">ChainRise</Typography>
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
                          minLength="10"
                          className="input-field"
                          autoComplete="off"
                          required
                        />
                        {/* <label>Mobile No</label> */}
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

                      {/* {!showSigupError && ?(<>
                  <input type="submit" value="Sign Up" className="sign-btn" />
                   </>) : (
                     <Typography variant="body1">Signup Failed</Typography>
                   )} */}
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
              //   style={{ background: theme.palette.primary.main }}
              className="carousell"
            >
              <div className="images-wrapper">
                <img
                  src={auth1}
                  className={`image img-1 ${activeSlide === 1 ? "show" : ""}`}
                  alt=""
                />
                {/* <img
                  src={auth2}
                  className={`image img-2 ${activeSlide === 2 ? "show" : ""}`}
                  alt=""
                />
                <img
                  src={auth3}
                  className={`image img-3 ${activeSlide === 3 ? "show" : ""}`}
                  alt=""
                /> */}
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

export default OrgRegistration;