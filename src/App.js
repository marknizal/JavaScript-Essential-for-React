import "./App.css";
import Homepage from "./pages/Homepage";
// EXAMPLE OF AN OBJECT, ARRAY AND FUNCTION

function App() {
  const user = {
    firstName: "Mark John Allen",
    lastName: "Nizal",
    age: 22,
  };

  const smartphones = ["Apple", "Google Pixel", "Samsung"];

  const formatName = () => {
    return user.firstName + " " + user.lastName;
  };

  return (
    <div className="App">
      <p>
        Hello, I'm {formatName(user)}, {user.age} years old and I love{" "}
        {smartphones[1]} products
      </p>
      <Homepage />
    </div>
  );
}

export default App;
