import React from "react";
import css from "./styles.module.css";

const GithubLogo = () => {
  return (
    <a href="https://www.github.com/PabloMur" target="_blank" rel="noreferrer">
      <div className={css.logoContainer}></div>
    </a>
  );
};

export { GithubLogo };
