import React from "react";

export default function Post(props) {
  return (
    <div
      style={{
        width: "200px",
        display: "inline-block",
        margin: "5px",
        border: "1px solid black"
      }}
    >
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  );
}
