import React, { useContext } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MapIcon from "@material-ui/icons/Map";
import WarningIcon from "@material-ui/icons/Warning";
import LockIcon from "@material-ui/icons/Lock";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupIcon from "@material-ui/icons/Group";
import PersonIcon from "@material-ui/icons/Person";
import MenuIcon from "@material-ui/icons/Menu";

import Personnel from "./Pages/Personnel";
import Incident from "./Pages/Incident";
import Units from "./Pages/Units";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import IncidentMap from "./Pages/IncidentMap";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { UserContext } from "./App";
import { AuthContext } from "./Auth/AuthProvider";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    },
    background: "#282c2e"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbarButton: {
    marginRight: theme.spacing(2)
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: "#282c2e",
    color: "#FFFFFF"
  },
  content: {
    flexGrow: 1,
    paddingTop: 0
  },
  drawerIcons: {
    color: "white"
  },
  drawerDivider: {
    background: "#797979"
  }
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const userContext = useContext(UserContext);
  const authContext = useContext(AuthContext);
  console.log("Auth: ");
  console.log(authContext);
  const { user, role } = userContext;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //authContext.getUser().then(user => console.log(user));

  const [open, setOpen, openPOI, setOpenPOI] = React.useState(true);

  const handleClickSegments = e => {
    console.log(e.target);
    setOpen(!open);
  };

  const handleClickPOI = () => {
    setOpenPOI(!openPOI);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>{user}</div>

      <Divider className={classes.drawerDivider} />
      <List dense>
        <ListItem button key={"select_incident"}>
          <ListItemIcon className={classes.drawerIcons}>
            <MenuIcon />
          </ListItemIcon>
          <ListItemText primary={"Velg hendelse"} />
        </ListItem>
        <Divider className={classes.drawerDivider} />
        <ListItem button component="a" href="/" key={"map"}>
          <ListItemIcon className={classes.drawerIcons}>
            <MapIcon />
          </ListItemIcon>
          <ListItemText primary={"Kart"} />
        </ListItem>
        <Divider className={classes.drawerDivider} />
        <ListItem button key={"hendelse"} component="a" href="/incident">
          <ListItemIcon className={classes.drawerIcons}>
            <WarningIcon />
          </ListItemIcon>
          <ListItemText primary={"Hendelse"} />
        </ListItem>
        <ListItem button key={"units"} component="a" href="/units">
          <ListItemIcon className={classes.drawerIcons}>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary={"Enheter"} />
        </ListItem>
        <ListItem button key={"mannskap"} component="a" href="/personnel">
          <ListItemIcon className={classes.drawerIcons}>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary={"Mannskap"} />
        </ListItem>
      </List>
      <Divider className={classes.drawerDivider} />
      <List dense>
        <ListItem
          button
          key={"logout"}
          onClick={() => {
            authContext.logout();
          }}
        >
          <ListItemIcon className={classes.drawerIcons}>
            <LockIcon />
          </ListItemIcon>
          <ListItemText primary={"Logg ut"} />
        </ListItem>
        <ListItem button key={"settings"}>
          <ListItemIcon className={classes.drawerIcons}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={"Innstillinger"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <Switch>
          <Route exact path="/">
            <IncidentMap basemap="topo4"></IncidentMap>
          </Route>
          <Route path="/incident">
            <Incident />
          </Route>
          <Route path="/personnel">
            <Personnel />
          </Route>
          <Route path="/missions">
            <div>Oppdrag</div>
          </Route>
          <Route path="/units">
            <Units />
          </Route>
          <Route path="/incident">
            <div>Incident</div>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default ResponsiveDrawer;
