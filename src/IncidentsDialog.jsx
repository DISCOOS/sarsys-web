import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import rootReducer from "./rootReducer";

export default function IncidentsDialog({ show, onClose, onSelect }) {
  const [incidents, setIncidents] = React.useState(null);

  useEffect(() => {
    // axios
    //   .get(process.env.REACT_APP_API_URL + "/incidents")
    //   .then(response => setIncidents({ items: response.data }))
    //   .catch(err => console.log(err));
  }, []);

  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog
      open={show}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Velg hendelse"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Incidents
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Avbryt
        </Button>
        <Button onClick={() => onSelect()} color="primary" autoFocus>
          Logg ut
        </Button>
      </DialogActions>
    </Dialog>
  );
}
