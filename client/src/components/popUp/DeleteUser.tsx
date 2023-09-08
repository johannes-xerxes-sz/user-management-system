import React from "react";
// Define the prop types for your component

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";

interface BasicModalProps {
  onClose: () => void;
  open: boolean;
  user: object; // Add this line to include the user prop
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BasicModal: React.FC<BasicModalProps> = ({ onClose, open, user }) => {

    
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose} // Close the modal when onClose event occurs
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to delete
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 7, mb: 0.2, bgcolor: "warning.main" }}
          >
            Continue
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
