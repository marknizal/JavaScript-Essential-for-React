const SpreadOperator = () => {
  const place = ["BGC", "QC", "Makati"];
  const morePlace = [...place, "Alabang", "Pasay"];

  const numbers = [1, 2, 3];
  function sum(a, b, c) {
    return a + b + c;
  }

  return (
    <>
      <p>HEY! This is more places in Manila to visit, {morePlace.join(", ")}</p>
      <p>
        {/* THIS IS AN OLD STYLE */}
        The sum of {numbers.join(", ")} is equal to{" "}
        {sum(numbers[0], numbers[1], numbers[2])}
      </p>
      <p>
        The sum of {numbers.join(", ")} is equal to {sum(...numbers)}
      </p>
    </>
  );
};

export default SpreadOperator;
