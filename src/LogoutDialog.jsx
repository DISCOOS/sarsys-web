import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function LogoutDialog({ show, onClose, onLogout }) {
  const [open, setOpen] = React.useState(show);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log("close");
    onClose();
  };
  return (
    <Dialog
      open={show}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Logg ut?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Vil du logge ut av SarSys?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Avbryt
        </Button>
        <Button onClick={() => onLogout()} color="primary" autoFocus>
          Logg ut
        </Button>
      </DialogActions>
    </Dialog>
  );
}
