import classes from "./Post.module.css";

import { Link } from "react-router-dom";

export default function Post({ id, author, body }) {
  return (
    <li className={classes.post}>
      <Link to={id}>
        <h3 className={classes.author}>{author}</h3>
        <p className={classes.text}>{body}</p>
      </Link>
    </li>
  );
}