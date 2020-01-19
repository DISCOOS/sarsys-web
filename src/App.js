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

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

import oidcConfiguration from "./configuration";
import Authenticating from "./Authenticating";
import Callback from "./Callback";
import NotAuthenticated from "./NotAuthenticated";
import NotAuthorized from "./NotAuthorized";

export const MapContext = React.createContext();
export const UserContext = React.createContext();
export const IncidentState = React.createContext();

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const store = createStore(rootReducer, {}, composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
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
                  notAuthenticated={NotAuthenticated}
                  notAuthorized={NotAuthorized}
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
    </Provider>
  );
}

export default App;
