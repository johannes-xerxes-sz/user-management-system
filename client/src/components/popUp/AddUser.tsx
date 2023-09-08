import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define the prop types for your component
interface BasicModalProps {
  handleClose: () => void; // A function that takes no arguments and returns void
  open: boolean; // A boolean prop indicating whether the modal is open
}

interface SignUpForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  allowExtraEmails: boolean;
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

const BasicModal: React.FC<BasicModalProps> = ({ handleClose, open }) => {
  const {
    register,
    handleSubmit,
    reset, // Add reset from react-hook-form
    formState: { errors },
  } = useForm<SignUpForm>();

  const onSubmit: SubmitHandler<SignUpForm> = (data) => {
    console.log(data);
    try {
      reset();
      toast.success(`User ${data.firstName} ${data.lastName} has been added`);
      handleClose();
    } catch {
      toast.error("Error has occured");
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose} // Close the modal when onClose event occurs
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={style}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New User
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  // name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && <span>This field is required</span>}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  autoFocus
                  {...register("lastName", { required: true })}
                  autoComplete="family-name"
                />
                {errors.lastName && <span>This field is required</span>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  {...register("email", { required: true })}
                  autoComplete="email"
                />
                {errors.email && <span>This field is required</span>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  {...register("password", { required: true })}
                  autoComplete="new-password"
                />

                {errors.password && <span>This field is required</span>}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "primary.main" }}
            >
              Add user
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
