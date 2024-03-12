/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./BothRegistration.css";
import { useDispatch } from "react-redux";
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

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:5000/signup", {
        ...formData,
        userType: "ORG",
      })
      .then((res) => {
        if (res.data.signup) {
          setShowSuccessSnack(true);
          setSnackMsg("Signup successful");
          setTimeout(() => {
            document.querySelector(".toggle2").click();
          }, 2000);
        } else console.log(res.data.error);
      })
      .catch((err) => console.log(err));
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:5000/login", {
        ...loginformData,
        userType: "ORG",
      })
      .then((res) => {
        if (res.data.login) {
          setShowSuccessSnack(true);
          setSnackMsg("Signin successful");
          setTimeout(() => {
            navigate("/dashboard")
          }, 2000);
        } else console.log(res.data.error);
      })
      .catch((err) => console.log(err));
  };

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
                    className="sign-up-form pranav-mc-bsdk-form"
                    onSubmit={handleSignInSubmit}
                  >
                    <div className="logo">
                      <img src={logo} />
                      <Typography variant="h6">Chain Rise</Typography>
                    </div>

                    <div className="heading">
                      <Typography
                        // color={theme.palette.primary.main}
                        variant="h4"
                        fontSize={"30px"}
                      >
                        Welcome, Establishment
                      </Typography>
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
                                backgroundColor: "#0098ea",
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
                    className="sign-in-form pranav-mc-bsdk-form"
                    onSubmit={handleSignupSubmit}
                  >
                    <div className="logo">
                      <img src={logo} alt="easyclass" />
                      <Typography variant="h6">BetterWorld</Typography>
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
                        {/* <label>Name</label> */}
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
                          minLength="10"
                          className="input-field"
                          autoComplete="off"
                          required
                        />
                        {/* <label>Mobile No</label> */}
                      </div>
                      <div>
                        {/* Org Radio Button */}
                        <div className="radio-btns">
                          <input
                            onChange={handleRadioChange}
                            type="radio"
                            name="organization"
                            value="org"
                            className="input-field"
                            style={{
                              width: "20px",
                              height: "15px",
                            }}
                            required
                          />
                          <label style={{ marginLeft: "30px" }}>
                            Profit Org
                          </label>
                        </div>

                        {/* NGO Radio Button */}
                        <div className="radio-btns">
                          <input
                            onChange={handleRadioChange}
                            type="radio"
                            name="organization"
                            value="ngo"
                            className="input-field"
                            style={{ width: "20px", height: "15px" }}
                            required
                          />
                          <label style={{ marginLeft: "30px", height: "15px" }}>
                            Non Profit Org
                          </label>
                        </div>

                        {selectedOption === "org" && (
                          <div className="input-wrap">
                            <input
                              placeholder="GSTIN"
                              type="text"
                              className="input-field"
                              autoComplete="off"
                              required
                              name="gstin"
                            />
                          </div>
                        )}
                        {selectedOption === "ngo" && (
                          <div className="input-wrap">
                            <input
                              placeholder="NGO Number"
                              type="text"
                              className="input-field"
                              autoComplete="off"
                              required
                              name="ngoNumber"
                            />
                          </div>
                        )}
                      </div>

                      {!showSuccessSnack && !showErrorSnack ? (
                        <>
                          <Box display={"flex"} gap={"30px"}>
                            <Button
                              type="submit"
                              value="Sign Up"
                              className="sign-btn"
                              sx={{
                                background: "#0098ea",
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