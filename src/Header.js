import PropTypes from "prop-types";
import React, { useContext } from "react";
import Button from "./Button";
import styles from "./Header.css";
import { ThemeContext } from "./ThemeContext";

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1 className={styles.title}>{props.title}</h1>
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
  title: "JStack's Blog",
};
