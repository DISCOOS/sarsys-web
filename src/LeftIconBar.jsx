import React, { useContext, useState } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import WarningIcon from "@material-ui/icons/WarningOutlined";
import LockIcon from "@material-ui/icons/LockOutlined";
import SettingsIcon from "@material-ui/icons/SettingsOutlined";
import GroupIcon from "@material-ui/icons/GroupOutlined";
import PersonIcon from "@material-ui/icons/PersonOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import AssignmentIcon from "@material-ui/icons/Assignment";

import IncidentPage from "./IncidentPage";
import MapPage from "./MapPage";
import { AuthenticationContext } from "@axa-fr/react-oidc-context/dist/Context";
import LogoutDialog from "./LogoutDialog";
import { useReactOidc } from "@axa-fr/react-oidc-context";

const drawerWidth = 55;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawerIcons: {
    color: "#c4c4c4"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#333333",
    color: "#FFFFFF"
  },
  content: {
    flexGrow: 1,
    //backgroundColor: theme.palette.background.default,
    padding: 0
  },
  bottomIcons: {
    position: "absolute",
    bottom: 0
  }
}));

export default function LeftIconBar() {
  const authContext = useContext(AuthenticationContext);
  const { oidcUser } = useReactOidc();
  const { profile } = oidcUser;
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const classes = useStyles();

  console.log("OIDC USer in iconbar: ");
  const expires_at = oidcUser.expires_at;
  const expire_date = new Date(expires_at * 1000);
  console.log("Expires: " + expires_at);
  console.log(
    `access_token expires:  ${expire_date.getHours()}:${expire_date.getMinutes()}:${expire_date.getSeconds()}`
  );

  const showLogoutDialogHandler = () => {
    setLogoutDialogOpen(true);
  };

  const logoutHandler = () => {
    authContext.logout();
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <List>
          <ListItem button key={"assignments"} component="a" href="/">
            <ListItemIcon className={classes.drawerIcons}>
              <AssignmentIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button key={"incident"} component="a" href="/incident">
            <ListItemIcon className={classes.drawerIcons}>
              <WarningIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button key={"units"} component="a" href="/units">
            <ListItemIcon className={classes.drawerIcons}>
              <GroupIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button key={"personell"} component="a" href="/personell">
            <ListItemIcon className={classes.drawerIcons}>
              <PersonIcon />
            </ListItemIcon>
          </ListItem>
        </List>
        <List className={classes.bottomIcons}>
          <ListItem
            button
            key={"logout"}
            onClick={e => showLogoutDialogHandler()}
          >
            <ListItemIcon className={classes.drawerIcons}>
              <LockIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button key={"settings"}>
            <ListItemIcon className={classes.drawerIcons}>
              <SettingsIcon />
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <Switch>
          <Route exact path="/">
            <MapPage />
          </Route>
          <Route path="/incident">
            <IncidentPage />
          </Route>
          <Route path="/personnel">
            {/* <Personnel /> */}
            <div>Personnel</div>
          </Route>
          <Route path="/missions">
            <div>Oppdrag</div>
          </Route>
          <Route path="/units">
            {/* <Units /> */}
            <div>Units</div>
          </Route>
          <Route path="/incident">
            <div>Incident</div>
          </Route>
        </Switch>
      </main>
      <LogoutDialog
        show={logoutDialogOpen}
        onClose={() => setLogoutDialogOpen(false)}
        onLogout={() => logoutHandler()}
      />
    </div>
  );
}
