import React from 'react'
import { Snackbar, SnackbarContent, Button } from '@material-ui/core'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import '../../style/snackBar.css'

class SnackBar extends React.Component {
  state = {
    open: false,
    message: "",
    type: "success",
  };

  openSnackbar = (message, type) =>
    this.setState({ open: true, message, type });

  closeSnackbar = () => this.setState({ open: false, message: "" });

  closeAction = (
    <Button
      style={{ color: "#fff", minWidth: "auto", padding: 0 }}
      onClick={this.closeSnackbar}
    >
      <CloseRoundedIcon></CloseRoundedIcon>
    </Button>
  );

  render() {
    return (
      <Snackbar
        classes={{ root: `ti-snackbar-root ${this.state.type}` }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={this.state.open}
        onClose={this.closeSnackbar}
      >
        <SnackbarContent
          message={this.state.message}
          classes={{ root: "ti-snackbarcontent-root-default" }}
          action={this.closeAction}
        />
      </Snackbar>
    );
  }
}

export default SnackBar

