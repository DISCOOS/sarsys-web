import * as React from "react";

const NotAuthenticated = () => (
  <div className="oidc-not-authenticated">
    <div className="oidc-not-authenticated__container">
      <h1 className="oidc-not-authenticated__title">Autentisering</h1>
      <p className="oidc-not-authenticated__content">Du er ikke autentisert</p>
    </div>
  </div>
);

export default NotAuthenticated;
