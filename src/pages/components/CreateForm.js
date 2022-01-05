import {
  Box,
  Button,
  Grid,
  IconButton,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "95vh",
    width: 700,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      width: "100vw",
    },
  },
  cancel: {
    textAlign: "right",
  },
  header: {
    margin: theme.spacing(3),
    textAlign: "center",
  },
  form: {
    flexGrow: 1,
    margin: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(3),
    },
  },
  formRow: {
    display: "flex",
    alignItems: "center",
    width: "100vh",
    margin: theme.spacing(1),
  },
  button: {
    backgroundColor: "#063970",
    color: "white",
    marginTop: theme.spacing(3),
  },
}));

const shiftList = [
  {
    value: "Day",
    label: "Day",
  },
  {
    value: "Night",
    label: "Night",
  },
];

function CreateForm({ handleClose }) {
  const classes = useStyles();
  const [shift, setShift] = useState();

  const handleChange = (event) => {
    setShift(event.target.value);
  };
  return (
    <Box className={classes.container}>
      <Box className={classes.cancel}>
        <IconButton size="small" onClick={handleClose}>
          <CancelOutlinedIcon
            fontSize="small"
            style={{
              color: "#063970",
            }}
          />
        </IconButton>
      </Box>
      <Box>
        <Typography className={classes.header} variant="h5">
          CREATE JOB
        </Typography>
        <div className={classes.form}>
          <form>
            <Grid container spacing={3}>
              <Box className={classes.formRow}>
                <Grid item xs={4} sm={3}>
                  <Typography variant="h6">Job Title:</Typography>
                </Grid>
                <Grid item xs={8} sm={9}>
                  <TextField
                    className={classes.margin}
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    //   onChange={(e) => handleSigninInput(e)}
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Grid>
              </Box>
              <Box className={classes.formRow}>
                <Grid item xs={4} sm={3}>
                  <Typography variant="h6">Shift:</Typography>
                </Grid>
                <Grid item xs={8} sm={9}>
                  <TextField
                    id="shift"
                    name="shift"
                    select
                    value={shift}
                    onChange={handleChange}
                    //   onClick={(e) => handleSignupInput(e)}
                    SelectProps={{
                      native: true,
                    }}
                    variant="outlined"
                    fullWidth
                    size="small"
                  >
                    {shiftList.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
              </Box>
              <Box className={classes.formRow}>
                <Grid item xs={4} sm={3}>
                  <Typography variant="h6">Level:</Typography>
                </Grid>
                <Grid item xs={8} sm={9}>
                  <TextField
                    className={classes.margin}
                    type="text"
                    id="level"
                    name="level"
                    //   onChange={(e) => handleSigninInput(e)}
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Grid>
              </Box>
              <Box className={classes.formRow}>
                <Grid item xs={4} sm={3}>
                  <Typography variant="h6">Vacancy:</Typography>
                </Grid>
                <Grid item xs={8} sm={9}>
                  <TextField
                    className={classes.margin}
                    type="number"
                    id="vacancies"
                    name="vacancies"
                    //   onChange={(e) => handleSigninInput(e)}
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Grid>
              </Box>
              <Box className={classes.formRow}>
                <Grid item xs={4} sm={3}>
                  <Typography variant="h6">Job Type:</Typography>
                </Grid>
                <Grid item xs={8} sm={9}>
                  <TextField
                    className={classes.margin}
                    type="text"
                    id="jobType"
                    name="jobType"
                    //   onChange={(e) => handleSigninInput(e)}
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Grid>
              </Box>
              <Box className={classes.formRow}>
                <Grid item xs={4} sm={3}>
                  <Typography variant="h6">Location:</Typography>
                </Grid>
                <Grid item xs={8} sm={9}>
                  <TextField
                    className={classes.margin}
                    type="text"
                    id="location"
                    name="location"
                    //   onChange={(e) => handleSigninInput(e)}
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Grid>
              </Box>
              <Box className={classes.formRow}>
                <Grid item xs={4} sm={3}>
                  <Typography variant="h6">Expiry Date:</Typography>
                </Grid>
                <Grid item xs={8} sm={9}>
                  <TextField
                    className={classes.margin}
                    type="date"
                    id="lastDateOfApply"
                    name="lastDateOfApply"
                    //   onChange={(e) => handleSigninInput(e)}
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Grid>
              </Box>
              <Box className={classes.formRow}>
                <Grid item xs={4} sm={3}>
                  <Typography variant="h6">Job Description:</Typography>
                </Grid>
                <Grid item xs={8} sm={9}>
                  <TextField
                    className={classes.margin}
                    type="tel"
                    id="jobDescription"
                    name="jobDescription"
                    //   onChange={(e) => handleSigninInput(e)}
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={3}
                    size="small"
                  />
                </Grid>
              </Box>

              {/* <Grid item xs={9}></Grid> */}
              {/* <Grid item xs={3}> */}

              {/* </Grid> */}
            </Grid>
            <Box textAlign="right">
              <Button
                className={classes.button}
                variant="contained"
                type="submit"
              >
                Save
              </Button>
            </Box>
          </form>
        </div>
      </Box>
    </Box>
  );
}

export default CreateForm;
