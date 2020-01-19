import React, { useContext, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IncidentsDialog from "./IncidentsDialog";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import IncidentMap from "./Pages/IncidentMap";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1
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
    paddingTop: 0
  },
  header: {
    align: "left !important"
  },
  title: {
    fontSize: 11
  },
  card: {
    textAlign: "left",
    margin: 5
  },
  cardContent: {
    padding: 5,
    fontSize: 14
  }
}));

export default function IncidentPage(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [incidentsDialogOpen, setIncidentsDialogOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const showIncidentsDialogHandler = () => {
    setIncidentsDialogOpen(true);
  };

  const [open, setOpen] = React.useState(true);

  const handleClickSegments = e => {
    console.log(e.target);
    setOpen(!open);
  };

  const selectIncidentHandler = () => {
    console.log("Incident selected");
  };

  const drawer = (
    <div>
      <div className={classes.header}></div>
      <Button
        variant="contained"
        color="primary"
        onClick={e => showIncidentsDialogHandler()}
      >
        Velg hendelse
      </Button>
      <Divider className={classes.drawerDivider} />
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Card raised={true} className={classes.card}>
          <CardContent classes={{ root: classes.cardContent }}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Type
            </Typography>
            <Typography color="textPrimary" gutterBottom>
              Savnet
            </Typography>
          </CardContent>
        </Card>
        <Card raised={true} className={classes.card}>
          <CardContent classes={{ root: classes.cardContent }}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Innsats
            </Typography>
            <Typography color="textPrimary" gutterBottom>
              2:02
            </Typography>
          </CardContent>
        </Card>
        <Card raised={true} className={classes.card}>
          <CardContent classes={{ root: classes.cardContent }}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Mnsk
            </Typography>
            <Typography color="textPrimary" gutterBottom>
              30
            </Typography>
          </CardContent>
        </Card>
        <Card raised={true} className={classes.card}>
          <CardContent classes={{ root: classes.cardContent }}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Enheter
            </Typography>
            <Typography color="textPrimary" gutterBottom>
              10
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid>
        <Card raised={true} className={classes.card}>
          <CardContent classes={{ root: classes.cardContent }}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Begrunnelse
            </Typography>
            <Typography
              color="textPrimary"
              className={classes.cardContent}
              gutterBottom
            >
              Mann, 32 år, økt selvmordsfare
            </Typography>
          </CardContent>
        </Card>
        <Card raised={true} className={classes.card}>
          <CardContent classes={{ root: classes.cardContent }}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Kode for ledelse
            </Typography>
            <Typography
              color="textPrimary"
              className={classes.cardContent}
              gutterBottom
            >
              T123
            </Typography>
          </CardContent>
        </Card>
        <Card raised={true} className={classes.card}>
          <CardContent classes={{ root: classes.cardContent }}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Kode for mannskap
            </Typography>
            <Typography
              color="textPrimary"
              className={classes.cardContent}
              gutterBottom
            >
              T123
            </Typography>
          </CardContent>
        </Card>
        <Card raised={true} className={classes.card}>
          <CardContent classes={{ root: classes.cardContent }}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              IPP
            </Typography>
            <Typography
              color="textPrimary"
              className={classes.cardContent}
              gutterBottom
            >
              UTM 32V 0561973 6596969
            </Typography>
          </CardContent>
        </Card>
        <Card raised={true} className={classes.card}>
          <CardContent classes={{ root: classes.cardContent }}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Oppmøte
            </Typography>
            <Typography color="textPrimary" gutterBottom>
              UTM 32V 0561973 65967278
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid>
        <Button variant="contained">KANSELLER</Button>
        <Button variant="contained" color="primary">
          FULLFØRT
        </Button>
      </Grid>
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
        <IncidentMap basemap="topo4"></IncidentMap>
      </main>
      <IncidentsDialog
        show={incidentsDialogOpen}
        onClose={() => setIncidentsDialogOpen(false)}
        onSelect={() => selectIncidentHandler()}
      />
    </div>
  );
}
