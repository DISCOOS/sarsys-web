import React from "react";
import { AuthConsumer } from "./authProvider";

export const Logout = () => (
  <AuthConsumer>
    {({ logout }) => {
      logout();
      return <span>loading</span>;
    }}
  </AuthConsumer>
);
