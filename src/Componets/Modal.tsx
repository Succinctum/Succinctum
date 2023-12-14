// import Modal from "@mui/joy/Modal";
import { ModalClose, ModalDialog } from "@mui/joy";
import { Typography } from "@mui/material";
import Modal from "@mui/material/Modal";


export default function ButtonUsage() {
  return (
    <Modal>
    <ModalDialog
      color="primary"
      size="lg"
      variant="plain"
    >
      <ModalClose />
      <Typography>Modal title</Typography>
    </ModalDialog>
  </Modal>
  );
}
