import React, { useState } from "react";

function Counter() {
  const [state, setState] = useState(0);
  const [color, setColor] = useState("white");

  const handleLike = () => {
    setState(state + 1);
    setColor("green")
  };

  const handleDislike = () => {
      setState(state - 1);
      setColor("red");
  };

  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <h1 style={{ margin: 0 }}>{state}</h1>

      <button onClick={handleLike}>Like 👍</button>
      <button onClick={handleDislike}>Dislike 👎</button>
    </div>
  );
}

export default Counter;

// Hooks
