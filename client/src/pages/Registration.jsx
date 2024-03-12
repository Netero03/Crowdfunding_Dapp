// let { data, error } = await supabase.auth.signInWithPassword({
//     email: Email,
//     password: Password
// });

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Registration.css";
import OrgRegistration from "../components/Registration/OrgRegistratioin";
import UserRegistration from "../components/Registration/UserRegistration";

const RegistrationContainer = () => {
  const [selectedOption, setSelectedOption] = useState("user");

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className="main-reg">
        <div className="decide">
          <h1 className="head1">Who are you?</h1>
          <div className="decide-btns">
            <button
              className="user-btn"
              id="user-btn"
              style={{ background: selectedOption === "user" ? "#0098ea" : "", color: selectedOption === "user" ? "white" : "" }}
              onClick={() => handleButtonClick("user")}
            >
              User
            </button>
            <hr style={{ height: "30px", border: "1px solid #056d09" }} />
            <button
              className="org-btn"
              style={{ background: selectedOption === "company" ? "#0098ea" : "", color: selectedOption === "company" ? "white" : "" }}
              onClick={() => handleButtonClick("company")}
            >
              Organization
            </button>
          </div>
        </div>
        {selectedOption === "user" && <UserRegistration />}
        {selectedOption === "company" && <OrgRegistration />}
      </div>
    </>
  );
};

export default RegistrationContainer;