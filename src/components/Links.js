import React from "react";
import { Link } from "react-router-dom";

const Links = ({ name, link, id, redirect }) => {
  return (
    <>
      {link ? (
        <a
          href={link}
          id={id}
          target="_blank"
          rel="noreferrer"
          className="link-container"
        >
          <h3 className="link-name">{name}</h3>
        </a>
      ) : (
        <Link to={redirect} id={id} className="link-container">
          <h3 className="link-name">{name}</h3>
        </Link>
      )}
    </>
  );
};

export default Links;
