import React from "react";
import { AuthConsumer } from "../Auth/AuthProvider";
function LoginTest() {
  return (
    <AuthConsumer>
      {({ signinRedirect }) => {
        console.log("Sign in start");
        signinRedirect();
        return <h1>Login test</h1>;
      }}
    </AuthConsumer>
  );
}
export default LoginTest;
