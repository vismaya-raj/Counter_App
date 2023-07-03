import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
    className="custom-typewriter"
    style = {{color:'green'}}
   
      options={{
        strings: [
          "Counting The Beats Of Progress"

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 80,
        delay: 100, 
      }}
    />
  );
}

export default Type;