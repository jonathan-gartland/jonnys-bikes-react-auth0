import React from "react";

export const Auth0Feature = ({ title, description, resourceUrl, icon }) => (
  <a
    href={resourceUrl}
    className="auth0-feature"
    target="_blank"
    rel="noopener noreferrer"
  >
    <h3 className="auth0-feature__headline">
      {title}
    </h3>
    <p className="auth0-feature__description">{description}</p>
  </a>
);
