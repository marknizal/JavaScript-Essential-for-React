import "./App.css";

function App() {
  // EXAMPLE OF AN OBJECTS
  const user = {
    firstName: `Mark John Allen`,
    lastName: `Nizal`,
  };

  // EXAMPLE OF A FUNCTION
  const formatName = () => {
    return user.firstName + " " + user.lastName;
  };

  // RENDER VALUE
  return (
    <div className="App">
      <h1>Hello, {formatName(user)}!</h1>
    </div>
  );
}

export default App;
