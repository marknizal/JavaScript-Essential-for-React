// EXAMPLE OF AN OBJECT, ARRAY AND FUNCTION

const JavaScriptTutorial = () => {
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
    <>
      <p>
        Hello, I'm {formatName(user)}, {user.age} years old and I love{" "}
        {smartphones[1]} products
      </p>
    </>
  );
};

export default JavaScriptTutorial;
