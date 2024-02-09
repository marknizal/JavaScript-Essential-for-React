import React, { useState, useEffect } from "react";

const Promises = () => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      const i = "Yes";
      i === "Yes" ? resolve() : reject();
    });

    promise
      .then(() => setMessage("Thank you so much my Love"))
      .catch(() => setMessage("CRY... CRY.... CRY"));
  }, []);

  return (
    <div>
      <h2>THIS IS A SAMPLE OF PROMISES</h2>
      {message}
    </div>
  );
};

export default Promises;
