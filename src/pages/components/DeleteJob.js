import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDeleteJobMutation } from "../features/JoblistApi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function DeleteJob({ id, handleCloseDelete }) {
  const [deleteJob] = useDeleteJobMutation();

  const handleNo = () => {
    handleCloseDelete();
  };

  const handleYes = async (e) => {
    e.preventDefault();

    try {
      await deleteJob(id);
      handleCloseDelete();
    } catch {
      alert();
    }
  };
  return (
    <>
      <Box sx={style}>
        <Typography
          textAlign="center"
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          Are You sure to delete this record?
        </Typography>
        <Box mt={3} textAlign="right" sx={{ "& button": { m: 1 } }}>
          <Button variant="contained" color="info" onClick={handleNo}>
            No
          </Button>
          <Button variant="contained" color="error" onClick={handleYes}>
            Yes
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default DeleteJob;
