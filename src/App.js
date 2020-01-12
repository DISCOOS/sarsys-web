import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LeftIconBar from "./LeftIconBar";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import {
  AuthenticationProvider,
  oidcLog,
  withOidcSecure
} from "@axa-fr/react-oidc-context";

import oidcConfiguration from "./configuration";
import Authenticating from "./Authenticating";
import Callback from "./Callback";

export const MapContext = React.createContext();
export const UserContext = React.createContext();
export const IncidentState = React.createContext();

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{ user: "Username", role: "user" }}>
        <MapContext.Provider
          value={{ basemap: "topo4", zoom: 14, center: [59.8419, 11.0315] }}
        >
          <div className="App">
            <Router>
              <AuthenticationProvider
                configuration={oidcConfiguration}
                loggerLevel={oidcLog.DEBUG}
                authenticating={Authenticating}
                callbackComponentOverride={Callback}
              >
                <Switch>
                  <Route path="/" component={withOidcSecure(LeftIconBar)} />
                </Switch>
              </AuthenticationProvider>
            </Router>
          </div>
        </MapContext.Provider>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
