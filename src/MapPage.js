import React, { useContext } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";

import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import MapIcon from "@material-ui/icons/Map";

import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

import GroupIcon from "@material-ui/icons/Group";
import IncidentMap from "./pages/IncidentMap";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { UserContext } from "./App";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    //display: "flex"
    //flexGrow: 1
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: "#282c2e",
    left: 55
  },
  content: {
    flexGrow: 1,
    paddingTop: 0,
    paddingLeft: 240
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

export default function MapPage(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [openPlanned, setOpenPlanned] = React.useState(true);
  const [openFinished, setOpenFinished] = React.useState(true);
  const [showPlanned, setShowPlanned] = React.useState(true);
  const [showFinished, setShowFinished] = React.useState(true);

  const handleClickPlanned = () => {
    setOpenPlanned(!openPlanned);
  };
  const handleClickFinished = () => {
    setOpenFinished(!openFinished);
  };
  const handleClickShowFinished = () => {
    console.log("VIS clicked");
    setShowFinished(!showFinished);
  };
  const handleClickShowPlanned = () => {
    setShowPlanned(!showPlanned);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Divider className={classes.drawerDivider} />
      <List
        dense={true}
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <ListItem button>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Aktive" />
        </ListItem>
        <ListItem>
          <ListItemIcon onClick={() => console.log("Icon click")}>
            <MapIcon />
          </ListItemIcon>
          <ListItemText primary="Planlagte" />
          {openPlanned ? (
            <ExpandLess onClick={handleClickPlanned} />
          ) : (
            <ExpandMore onClick={handleClickPlanned} />
          )}
        </ListItem>
        <ListItem>
          <ListItemIcon onClick={handleClickShowFinished}>
            {showFinished ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </ListItemIcon>
          <ListItemText primary="Utførte" />
          {openFinished ? (
            <ExpandLess onClick={handleClickFinished} />
          ) : (
            <ExpandMore onClick={handleClickFinished} />
          )}
        </ListItem>
        <Collapse in={openFinished} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <MapIcon />
              </ListItemIcon>
              <ListItemText primary="Ferdige" />
            </ListItem>
          </List>
        </Collapse>
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
              keepMounted: true
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
        <IncidentMap basemap="topo4"></IncidentMap>
      </main>
    </div>
  );
}
