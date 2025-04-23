import React from "react";

function Binding(props) {

  const shootjust = () => {
        alert("working");
   };
  const shoot = (a) => {
    alert(a);
  };

  return (
    <div>
      <h2>Hello, {props.name}!</h2>

      <button onClick={shootjust}>Take the shot!</button>

      <button onClick={()=>shoot("goal")}>Take the shot!</button>
    </div>
  );
}

export default Binding;
