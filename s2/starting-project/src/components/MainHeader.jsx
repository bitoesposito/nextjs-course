import { MdPostAdd, MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";

import classes from "./MainHeader.module.css";
import { useState } from "react";

function MainHeader({ onCreatePost }) {

  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage  size={24} />
        React Poster
      </h1>
      <p>
        <Link to="/create-post" className={classes.button} onClick={onCreatePost}>
          <MdPostAdd size={24} />
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
