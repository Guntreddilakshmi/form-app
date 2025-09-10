import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  // handle input change
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1> Form with onChange</h1>

      <form>
        <label htmlFor="name">Enter your name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleChange}
          placeholder="Type your name..."
        />
      </form>

      <h2>Live Preview:</h2>
      <p>{name ? `Hello, ${name}! 👋` : "Please enter your name above."}</p>
    </div>
  );
}

export default App;
