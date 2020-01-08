import React from "react";
import { AuthConsumer } from "./AuthProvider";
export const SilentRenew = () => (
  <AuthConsumer>
    {({ signinSilentCallback }) => {
      console.log("Silent signin callback");
      signinSilentCallback();
      return <span>loading</span>;
    }}
  </AuthConsumer>
);
