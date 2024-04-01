// let { data, error } = await supabase.auth.signInWithPassword({
//     email: Email,
//     password: Password
// });

/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from "react";
import "./Registration.css";
import OrgRegistration from "../components/Registration/OrgRegistratioin";
import UserRegistration from "../components/Registration/UserRegistration";

const RegistrationContainer = () => {
  const [selectedOption, setSelectedOption] = useState("user");
  const [backgroundColor, setBackgroundColor] = useState('bg-[#9ad0c2]');

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    // Change background color after component is mounted
    setBackgroundColor('bg-[#2D9596]');
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <>
      <div className={`h-screen transition duration-1000 ${backgroundColor}`}>
        <div className="decide">
          <h1 className="head1">Who are you?</h1>
          <div className="decide-btns">
            <button
              className="user-btn"
              id="user-btn"
              style={{ background: selectedOption === "user" ? "#265073" : "", color: selectedOption === "user" ? "white" : "" }}
              onClick={() => handleButtonClick("user")}
            >
              User
            </button>
            <hr style={{ height: "30px", border: "1px solid #056d09" }} />
            <button
              className="org-btn"
              style={{ background: selectedOption === "company" ? "#265073" : "", color: selectedOption === "company" ? "white" : "" }}
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