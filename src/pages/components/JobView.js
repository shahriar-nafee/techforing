import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

function JobView() {
  const location = useLocation();
  const { state } = location.state;

  return (
    <div>
      <Container>
        <Box sx={{ bgcolor: "#fff", height: "80vh" }}>
          <Box pt={5} mb={3} display="flex" justifyContent="center">
            <Typography variant="h6">Title:</Typography>
            <Typography variant="h6" ml={2}>
              <b>{state.jobTitle}</b>
            </Typography>
          </Box>
          <hr />
          <Grid
            container
            spacing={2}
            mt={2}
            mb={4}
            justifyContent="space-evenly"
          >
            <Grid item>
              <Typography>TYPE</Typography>
              <Typography>
                <b>{state.jobType}</b>
              </Typography>
            </Grid>
            <Grid item>
              <Typography>LEVEL</Typography>
              <Typography>
                <b>{state.level}</b>
              </Typography>
            </Grid>
            <Grid item>
              <Typography>LOCATION</Typography>
              <Typography>
                <b>{state.location}</b>
              </Typography>
            </Grid>
            <Grid item>
              <Typography>VACANCY</Typography>
              <Typography>
                <b>{state.vacancies}</b>
              </Typography>
            </Grid>
            <Grid item>
              <Typography>SHIFT</Typography>
              <Typography>
                <b>{state.shift}</b>
              </Typography>
            </Grid>
            <Grid item>
              <Typography>EXPIRY DATE</Typography>
              <Typography>
                <b>{state.lastDateOfApply}</b>
              </Typography>
            </Grid>
          </Grid>
          <hr />
          <Box my={5} textAlign="center">
            <Typography>DESCRIPTION</Typography>
            <Typography>
              <b>{state.jobDescription}</b>
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default JobView;
