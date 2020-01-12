import * as React from "react";

const NotAuthorized = () => (
  <div className="oidc-not-authorized">
    <div className="oidc-not-authorized__container">
      <h1 className="oidc-not-authorized__title">Autorisasjon</h1>
      <p className="oidc-not-authorized__content">Du er ikke autorisert.</p>
    </div>
  </div>
);

export default NotAuthorized;
