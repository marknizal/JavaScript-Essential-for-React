const ArrayIterators = () => {
  let students = [
    {
      id: 1,
      firstName: "Mark Allen",
      lastName: "Nizal",
      gender: "Male",
      married: false,
      age: 21,
      paid: 250,
      courses: ["JavaScript", "React"],
    },
    {
      id: 2,
      firstName: "Mark Nicolas",
      lastName: "Niz",
      gender: "Male",
      married: true,
      age: 27,
      paid: 100,
      courses: ["HTML", "CSS"],
    },
    {
      id: 3,
      firstName: "John Carlo",
      lastName: "Constantino",
      gender: "Female",
      married: false,
      age: 18,
      paid: 0,
      courses: ["PHP", "Java", "SQL"],
    },
  ];

  const mapStudents = students.map((student, index) => (
    <div key={student.id}>
      <p>{`Index: ${index}`}</p>
      <p>{`${student.firstName} ${student.lastName}`}</p>
      <p>{`Gender: ${student.gender}`}</p>
      <p>{`Age: ${student.age}`}</p>
      <p>{`Married: ${student.married ? "Yes" : "No"}`}</p>
      <p>{`Paid: ${student.paid}`}</p>
      <p>{`Courses: ${student.courses.join(", ")}`}</p>
      <hr></hr>
    </div>
  ));

  const filterStudents = students.filter((student) => student.paid);
  const viewFilter = (
    <div>
      {filterStudents.map((student) => (
        <div key={student.id}>
          <p>{`${student.firstName} ${student.lastName}`}</p>
          <p>{`Gender: ${student.gender}`}</p>
          <p>{`Age: ${student.age}`}</p>
          <p>{`Married: ${student.married ? "Yes" : "No"}`}</p>
          <p>{`Paid: ${student.paid}`}</p>
          <p>{`Courses: ${student.courses.join(", ")}`}</p>
          <hr></hr>
        </div>
      ))}
    </div>
  );

  const someStudents = students.some((student) => student.paid > 0);
  const viewSome = (
    <div>
      {someStudents ? (
        <p>There are students who have paid.</p>
      ) : (
        <p>No students have paid.</p>
      )}
      <hr></hr>
    </div>
  );

  const findStudent = students.find((student) => student.age > 20);
  const viewFind = (
    <div>
      {findStudent ? (
        <>
          <p>{`${findStudent.firstName} ${findStudent.lastName}`}</p>
          <p>{`Gender: ${findStudent.gender}`}</p>
          <p>{`Age: ${findStudent.age}`}</p>
          <p>{`Married: ${findStudent.married ? "Yes" : "No"}`}</p>
          <p>{`Paid: ${findStudent.paid}`}</p>
          <p>{`Courses: ${findStudent.courses.join(", ")}`}</p>
          <hr></hr>
        </>
      ) : (
        <p>No student found with age greater than 20.</p>
      )}
    </div>
  );

  const totalCost = students.reduce((accumulator, student) => {
    accumulator = accumulator + student.paid;
    return accumulator;
  }, 0); // Initialize accumulator with 0

  return (
    <>
      <div>
        <h2>THIS IS A SAMPLE OF .MAP</h2>
        {mapStudents}
      </div>

      <div>
        <h2>THIS IS A SAMPLE OF .FILTER</h2>
        {viewFilter}
      </div>

      <div>
        <h2>THIS IS A SAMPLE OF .SOME</h2>
        {viewSome}
      </div>

      <div>
        <h2>THIS IS A SAMPLE OF .FIND</h2>
        {viewFind}
      </div>

      <div>
        <h2>THIS IS A SAMPLE OF .REDUCE</h2>
        Total Cost: {totalCost}
      </div>
    </>
  );
};

export default ArrayIterators;
