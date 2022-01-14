import {
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import { useEditJobMutation } from "../features/JoblistApi";

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
  buttonWrapper: {
    margin: theme.spacing(1, 0),
    position: "relative",
  },
  button: {
    backgroundColor: "#063970",
    color: "white",
    marginTop: theme.spacing(3),
  },
  buttonProgress: {
    color: "#063970",
    position: "absolute",
    top: "70%",
    right: "4%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const shiftList = [
  {
    value: "day",
    label: "Day",
  },
  {
    value: "night",
    label: "Night",
  },
];

const jobTypeList = [
  {
    value: "part_time",
    label: "Part Time",
  },
  {
    value: "full_time",
    label: "Full Time",
  },
  {
    value: "internship",
    label: "Internship",
  },
];

function EditForm({ handleCloseEdit, data }) {
  const classes = useStyles();
  const [editJob, { isLoading }] = useEditJobMutation();
  const [shift, setShift] = useState();
  const [jobType, setJobType] = useState();
  const [formData, setFormData] = useState(data);

  const handleFormInput = (e) => {
    const newData = { ...formData };
    newData[e.target.name] = e.target.value;
    setFormData(newData);
  };

  const handleChange = (event) => {
    setShift(event.target.value);
  };

  const handleChangeJobType = (event) => {
    setJobType(event.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await editJob(formData);
    } catch {
      alert();
    }
  };
  return (
    <Box className={classes.container}>
      <Box className={classes.cancel}>
        <IconButton size="small" onClick={handleCloseEdit}>
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
          EDIT JOB
        </Typography>
        <div className={classes.form}>
          <form onSubmit={handleFormSubmit}>
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
                    value={formData.jobTitle}
                    onChange={(e) => handleFormInput(e)}
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
                    defaultValue={formData.shift}
                    value={shift}
                    onChange={handleChange}
                    onClick={(e) => handleFormInput(e)}
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
                    value={formData.level}
                    onChange={(e) => handleFormInput(e)}
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
                    value={formData.vacancies}
                    onChange={(e) => handleFormInput(e)}
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
                    id="jobType"
                    name="jobType"
                    select
                    defaultValue={formData.jobType}
                    value={jobType}
                    onChange={handleChangeJobType}
                    onClick={(e) => handleFormInput(e)}
                    SelectProps={{
                      native: true,
                    }}
                    variant="outlined"
                    fullWidth
                    size="small"
                  >
                    {jobTypeList.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
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
                    value={formData.location}
                    onChange={(e) => handleFormInput(e)}
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
                    value={formData.lastDateOfApply}
                    onChange={(e) => handleFormInput(e)}
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
                    value={formData.jobDescription}
                    onChange={(e) => handleFormInput(e)}
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
            <Box textAlign="right" className={classes.buttonWrapper}>
              <Button
                className={classes.button}
                disabled={isLoading}
                variant="contained"
                type="submit"
              >
                UPDATE
              </Button>
              {isLoading && (
                <CircularProgress
                  size={24}
                  className={classes.buttonProgress}
                />
              )}
            </Box>
          </form>
        </div>
      </Box>
    </Box>
  );
}

export default EditForm;
