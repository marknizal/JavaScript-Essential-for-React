import React, { useState, useEffect } from "react";

function AsyncAwait() {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        const data = await response.json();
        setTodo(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {todo ? (
        <div>
          <h2>THIS IS AN EXAMPLE OF ASYNC & AWAIT</h2>
          <h3>Title: {todo.title}</h3>
          <p>Completed: {todo.completed ? "Yes" : "No"}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default AsyncAwait;
