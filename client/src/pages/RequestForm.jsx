import React, { useState } from "react";
import './ApprovalForm.css'

import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Snackbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/helper/SupabaseClient";

const RequestForm = () => {
  const [activeInput, setActiveInput] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [showErrorSnack, setShowErrorSnack] = useState(false);
  const [showSuccessSnack, setShowSuccessSnack] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('Pending');

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project_detail: "",
    proof_link: "",
    project_mission: "",
  });


  const navigate = useNavigate();

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowSuccessSnack(false);
    setShowErrorSnack(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data, error } = await supabase
        .from('ProjectRequest')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            projectDetails: formData.project_detail,
            mission: formData.project_mission,
            link: formData.proof_link,
            status: 'Pending'
          },
        ])
        .select()

      if (error) {
        console.log(error)
        setShowSuccessSnack(true);
        setSnackMsg(" Error  " + error.message);
      }

      else {
        setShowSuccessSnack(true);
        setSnackMsg(" Wait For Admin Approval");
        console.log(data)
        setTimeout(() => {
          navigate('/approvalpage')
        }, 2000)


      }

    } catch (error) { console.log(error) }

  }

  return (
    <div>
      <form

        autoComplete="off"
        className="sign-in-form fillup-form"
        onSubmit={handleSubmit}
      >

        <div className="actual-form">
          <div className="input-wrap">
            <input
              placeholder="Your Name"
              onChange={handleChange}
              type="text"
              name="name"
              className={`input-field ${activeInput === 0 ? "active" : ""
                }`}
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
              name="email"
              className={`input-field ${activeInput === 1 ? "active" : ""
                }`}
              autoComplete="off"
              required
            />

          </div>

          <div className="input-wrap">
            <input
              placeholder="Project Details"
              onChange={handleChange}
              type="textarea"
              name="project_detail"
              className={`input-field ${activeInput === 1 ? "active" : ""
                }`}
              autoComplete="off"
              required
            />
          </div>

          <div className="input-wrap">
            <input
              placeholder="GoogleDrive link for proof"
              onChange={handleChange}
              type="link"
              name="proof_link"
              className={`input-field ${activeInput === 1 ? "active" : ""
                }`}
              autoComplete="off"
              required
            />
          </div>

          <div className="input-wrap">
            <input
              placeholder="Mission & Objectives"
              onChange={handleChange}
              type="textarea"
              name="project_mission"
              className={`input-field ${activeInput === 1 ? "active" : ""
                }`}
              autoComplete="off"
              required
            />
          </div>

          {!showSuccessSnack && !showErrorSnack ? (
            <>
              <Box display={"flex"} gap={"30px"}>
                <Button
                  type="submit"
                  value="Submit"
                  className="sign-btn"
                  sx={{
                    background: "#265073",
                    color: "white",
                    marginBottom: "10px",
                  }}
                >
                  Submit
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
              Submission Successful
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
              Submission Failed
            </Typography>
          )}

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

        </div>
      </form>
    </div>
  )
}

export default RequestForm