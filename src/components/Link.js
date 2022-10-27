import React from "react";

function Link({ name, link, id }) {
  return (
    <a href={link} className="link-container" id={id}>
      <h3 className="link-name">{name}</h3>
    </a>
  );
}

export default Link;
