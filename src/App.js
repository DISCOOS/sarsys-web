import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DrawerLeft from "./DrawerLeft";
import Login from "./Pages/Login";
import { AuthProvider } from "./Auth/AuthProvider";
import LoginCallback from "./Auth/LoginCallback";
import LoginTest from "./Pages/LoginTest";
import { SilentRenew } from "./Auth/SilentRenew";

export const MapContext = React.createContext();
export const UserContext = React.createContext();
export const IncidentState = React.createContext();

function App() {
  return (
    <UserContext.Provider value={{ user: "Jon-Harald Bråthen", role: "user" }}>
      <MapContext.Provider
        value={{ basemap: "topo4", zoom: 14, center: [59.8419, 11.0315] }}
      >
        <AuthProvider>
          <div className="App">
            <Router>
              <Switch>
                silentcallback
                <Route path="/silentcallback" component={SilentRenew} />
                <Route path="/logincallback" component={LoginCallback} />
                <Route path="/logintest" component={LoginTest} />
                <Route path="/login" component={Login} />
                <Route path="/" component={DrawerLeft} />
              </Switch>
            </Router>
          </div>
        </AuthProvider>
      </MapContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
