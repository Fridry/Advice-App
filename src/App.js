import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

const App = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");

    setAdvice(response.data.slip.advice);
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
      </div>

      <button className="button" onClick={fetchAdvice}>
        <span>GIVE ME ADVICE</span>
      </button>
    </div>
  );
};

export default App;
