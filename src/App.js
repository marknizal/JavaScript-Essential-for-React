import "./App.css";
import Button from "./components/Button";
// import ReactDOM from 'react-dom';
import AppWithSlideshow from "./components/Slideshow";

function App() {
  // EXAMPLE OF AN OBJECT
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
      <Button />
      <AppWithSlideshow />
    </div>
  );
}

export default App;
