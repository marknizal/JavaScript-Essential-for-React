const Destructuring = () => {
  //OLD STYLE
  const objects = ["Apple", "OPPO", "Google Pixel", "Xiaomi", "Samsung"];
  let phone1 = objects[0];
  let phone2 = objects[1];
  let phone3 = objects[2];
  let phone4 = objects[3];
  let phone5 = objects[4];

  const [brand1, brand2, brand3, brand4, brand5] = objects;

  const person = {
    name: "Mark",
    age: 22,
    // birthdate: Date(),
    birthdate: "01-10-2025",
    citizenship: "Filipino",
  };

  // OLD STYLE
  // let name = person.name;
  // let age = person.age;
  // let birthdate = person.birthdate;
  // let citizenship = person.citizenship;

  // NEW
  const { name, age, birthdate, citizenship } = person;

  return (
    <>
      <p>
        The top 5 most valuable phone brands are {phone1}, {phone2}, {phone3},{" "}
        {phone4} and {phone5}
      </p>
      <p>
        The top 5 most valuable phone brands are {brand1}, {brand2}, {brand3},{" "}
        {brand4} and {brand5}
      </p>
      <p>
        Hello, my name is {name}, I am {age} years old, turning 23 on{" "}
        {birthdate} and I am a {citizenship}
      </p>
    </>
  );
};

export default Destructuring;
