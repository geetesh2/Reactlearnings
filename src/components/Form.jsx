import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.text === false ? (
        <input type="password" placeholder="confirm Password" />
      ) : null}
      <button type="submit">
        {props.text === true ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Form;
