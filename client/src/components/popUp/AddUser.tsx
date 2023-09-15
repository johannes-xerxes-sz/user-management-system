import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField, InputLabel, Select } from "@mui/material"; // Import InputLabel and Select
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateUserMutation } from "../../features/apiSlice";

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
  address: string;
  role: string;
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
  const [createUser, { isSuccess: createUserSuccess }] =
    useCreateUserMutation(); // Destructure the mutateAsync function
  const [selectedRole, setSelectedRole] = useState("user"); // Default role is "user"

  const {
    register,
    handleSubmit,
    reset, // Add reset from react-hook-form
    formState: { errors },
  } = useForm<SignUpForm>();

  const onSubmit: SubmitHandler<SignUpForm> = async (data) => {
    try {
      const userData = { ...data, role: selectedRole };
      await createUser(userData);
      reset();
      handleClose();
    } catch {
      toast.error("Error has occurred");
    }
  };

  useEffect(() => {
    if (createUserSuccess) {
      try {
        toast.success(`Success! The user has been added.`);
        reset();
        handleClose();
      } catch {
        toast.error("Error has occured");
      }
    }
  }, [createUserSuccess]);

  const normalInputStyle = {
    borderColor: "inherit", // Default border color
  };

  const errorInputStyle = {
    borderColor: "red", // Red border for errors
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
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  {...register("firstName", { required: true })}
                  style={errors.firstName ? errorInputStyle : normalInputStyle}
                />
                {errors.firstName && (
                  <span style={{ color: "red" }}>This field is required</span>
                )}
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  autoFocus
                  {...register("lastName", { required: true })}
                  style={errors.lastName ? errorInputStyle : normalInputStyle}
                />
                {errors.firstName && (
                  <span style={{ color: "red" }}>This field is required</span>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  })}
                  style={errors.email ? errorInputStyle : normalInputStyle}
                />
                {errors.email && (
                  <span style={{ color: "red" }}>Invalid Email</span>
                )}{" "}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  {...register("password", { required: true })}
                  style={errors.password ? errorInputStyle : normalInputStyle}
                />
                {errors.password && (
                  <span style={{ color: "red" }}>This field is required</span>
                )}{" "}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Address"
                  type="address"
                  id="address"
                  {...register("address", { required: true })}
                  style={errors.address ? errorInputStyle : normalInputStyle}
                />
                {errors.address && (
                  <span style={{ color: "red" }}>This field is required</span>
                )}{" "}
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="role">Role</InputLabel>
                <Select
                  native
                  fullWidth
                  id="role"
                  {...register("role", { required: true })}
                  style={errors.role ? errorInputStyle : normalInputStyle}
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </Select>
                {errors.role && (
                  <span style={{ color: "red" }}>Please select a role</span>
                )}
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
