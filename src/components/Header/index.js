import PropTypes from "prop-types";
import React, { useContext } from "react";

import Button from "../Button";
import Title from "../Title";

import { ThemeContext } from "../../context/ThemeContext";

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <Title>{props.title}</Title>
      <Button onClick={onToggleTheme}>Mudar tema </Button>
      {props.children}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: "Meira's Blog",
};
