import React, { useState } from "react";
import { StyledInput } from "./Input.styled";

const OnChange = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h2>THIS IS A SAMPLE OF ONCHANGE HANDLER</h2>
      <StyledInput
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
};

export default OnChange;
