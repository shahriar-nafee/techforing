import {
  Box,
  Button,
  Grid,
  InputAdornment,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Lock } from "@material-ui/icons";
import Mail from "@material-ui/icons/Mail";
import Alert from "@material-ui/lab/Alert";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../features/AuthSlice";

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  header: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(8),
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
  button: {
    backgroundColor: "#063970",
    color: "white",
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, logInError } = useSelector((state) => state.auth);

  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
  });
  const [warning, setWarning] = useState();

  const handleSigninInput = (e) => {
    const newData = { ...signinData };
    newData[e.target.name] = e.target.value;
    setSigninData(newData);
  };

  const handleSigninSubmit = async (e) => {
    e.preventDefault();
    try {
      setWarning("");
      await dispatch(loginUser(signinData));
    } catch {}
  };

  useEffect(() => {
    setWarning(logInError);
  }, [logInError]);

  useEffect(() => {
    if (token) {
      navigate("portal/jobs");
    }
  }, [token, navigate]);

  return (
    <Grid>
      <Box className={classes.header}>
        <Typography className={classes.typo} variant="h5">
          SIGN IN
        </Typography>
        <Typography className={classes.typo} variant="subtitle1">
          Lorem ipsum dolor sit amet.
        </Typography>
      </Box>
      {warning && (
        <div className={classes.warning}>
          <Alert variant="filled" severity="error">
            {warning}
          </Alert>
        </div>
      )}
      <form onSubmit={handleSigninSubmit}>
        <TextField
          className={classes.margin}
          type="email"
          label="Email"
          id="email"
          name="email"
          onChange={(e) => handleSigninInput(e)}
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
        <TextField
          className={classes.margin}
          label="Password"
          type="password"
          id="password"
          name="password"
          onChange={(e) => handleSigninInput(e)}
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
        <Box textAlign="center">
          <Button className={classes.button} variant="contained" type="submit">
            SIGN IN
          </Button>
        </Box>
      </form>
      <Box textAlign="center" className={classes.margin}>
        <NavLink style={{ textDecoration: "none" }} to="/register">
          <Button variant="text">Don't have an account? Please register</Button>
        </NavLink>
      </Box>
    </Grid>
  );
};

export default SignIn;
