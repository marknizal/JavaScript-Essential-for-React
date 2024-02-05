const TernarySample = () => {
  let grade = 80;
  let remarks = "";

  //OLD SYNTYAX
  if (grade >= 90) {
    remarks = "A";
  } else if (grade >= 80) {
    remarks = "B";
  } else if (grade >= 70) {
    remarks = "C";
  } else {
    remarks = "F";
  }

  //TERNARY VERSION
  const remarkss =
    grade >= 90 ? "A" : grade >= 80 ? "B" : grade >= 70 ? "C" : "F";

  return (
    <>
      <p>
        Your grade is <b>{remarks}</b>
      </p>
      <p>
        Your grade is <b>{remarkss}</b>
      </p>
    </>
  );
};

export default TernarySample;
