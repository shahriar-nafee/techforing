import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  Box,
  Button,
  CircularProgress,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PhoneIcon from "@material-ui/icons/Phone";
import { Lock, Mail } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../features/AuthSlice";
import { Alert } from "@material-ui/lab";

const genderList = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
  {
    value: "Other",
    label: "Other",
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 510,
  },
  header: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(7),
  },
  typo: {
    textAlign: "center",
  },
  warning: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  form: {
    marginTop: theme.spacing(2),
    flexGrow: 1,
  },
  buttonWrapper: {
    margin: theme.spacing(1),
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
    top: "50%",
    left: "50%",
    // marginTop: -12,
    marginLeft: -12,
  },
}));

function SignUp() {
  const classes = useStyles();
  const [gender, setGender] = useState();
  const dispatch = useDispatch();
  const [signupData, setSignupData] = useState({
    full_name: "",
    phone_number: "",
    birthDate: "",
    gender: "Male",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [warning, setWarning] = useState();
  const [success, setSuccess] = useState();

  const { signUpError, message, loading } = useSelector((state) => state.auth);

  const handleSignupInput = (e) => {
    const newData = { ...signupData };
    newData[e.target.name] = e.target.value;
    setSignupData(newData);
  };

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setWarning("");
    setSuccess("");
    if (signupData.password !== signupData.confirmPassword) {
      return setWarning("Passwords do not match");
    }

    try {
      await dispatch(signupUser(signupData));
    } catch {
      alert();
    }
  };

  useEffect(() => {
    setWarning(signUpError);
    setSuccess(message);
    if (success) {
      setSignupData({
        full_name: "",
        phone_number: "",
        birthDate: "",
        gender: "Male",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [signUpError, message, success]);

  useEffect(() => {
    setWarning("");
    setSuccess("");
  }, []);
  return (
    <Box className={classes.container}>
      <Box className={classes.header}>
        <Typography className={classes.typo} variant="h5">
          SIGN UP
        </Typography>
        <Typography className={classes.typo} variant="subtitle1">
          Register To Get A job
        </Typography>
      </Box>
      {warning && (
        <div className={classes.warning}>
          <Alert variant="filled" severity="error">
            {warning}
          </Alert>
        </div>
      )}
      {success && (
        <div className={classes.warning}>
          <Alert variant="filled" severity="success">
            {success}
          </Alert>
        </div>
      )}

      <form onSubmit={handleSignupSubmit}>
        <Grid container spacing={3} className={classes.form}>
          <Grid item xs={6}>
            <TextField
              required
              label="Name"
              id="full_name"
              name="full_name"
              value={signupData.full_name}
              onChange={(e) => handleSignupInput(e)}
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              type="tel"
              label="Phone Number"
              id="phone_number"
              name="phone_number"
              value={signupData.phone_number}
              onChange={(e) => handleSignupInput(e)}
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              type="date"
              label="Date Of Birth"
              id="birthDate"
              name="birthDate"
              value={signupData.birthDate}
              onChange={(e) => handleSignupInput(e)}
              variant="outlined"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="gender"
              name="gender"
              select
              label="Gender"
              value={gender}
              onChange={handleChange}
              onClick={(e) => handleSignupInput(e)}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
              fullWidth
            >
              {genderList.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              className={classes.margin}
              type="email"
              label="Email"
              id="email"
              name="email"
              value={signupData.email}
              onChange={(e) => handleSignupInput(e)}
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Mail />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              className={classes.margin}
              label="Password"
              type="password"
              id="password"
              name="password"
              value={signupData.password}
              onChange={(e) => handleSignupInput(e)}
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              className={classes.margin}
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={signupData.confirmPassword}
              onChange={(e) => handleSignupInput(e)}
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
        <Box textAlign="center" className={classes.buttonWrapper}>
          <Button
            className={classes.button}
            variant="contained"
            type="submit"
            disabled={loading}
          >
            SIGN UP
          </Button>
          {loading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </Box>
      </form>
    </Box>
  );
}

export default SignUp;
