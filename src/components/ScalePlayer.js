import React, { useState } from "react";

const ScalePlayer = () => {
  return (
    <div className="container">
      <h2>C Major Pentatonic</h2>
      <p>C, D, F, G, Bb</p>
      <select>
        <option>C</option>
      </select>
      <select>
        <option>C Major Pentatonic</option>
      </select>
      <button>Start</button>
    </div>
  );
};

export default ScalePlayer;
