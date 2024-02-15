import React, { useState } from "react";
import { StyledInput, StyledForm } from "./Form.styled";
import Button from "../../Button/Button";

const MyFormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Render form data
    setSubmittedData(formData);
  };

  return (
    <div>
      <h2>THIS IS A SAMPLE OF ONSUBMIT</h2>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
        />
        <StyledInput
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
        />
        <StyledInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <Button type="submit">SUBMIT</Button>
      </StyledForm>
      {submittedData && (
        <div>
          <h2>Form Data</h2>
          <p>
            Name: {submittedData.firstName} {submittedData.lastName}
          </p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

export default MyFormComponent;
