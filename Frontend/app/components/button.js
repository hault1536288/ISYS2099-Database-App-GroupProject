import React from "react";
import { useHistory } from "react-router-dom";

const Button = ({ text, to }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(to);
  };

  return <button onClick={handleClick}>{text}</button>;
};

export default Button;
