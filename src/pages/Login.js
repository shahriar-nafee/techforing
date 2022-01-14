import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { AppBar, Grid, Typography } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: "1",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(5),

    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(20),
    },
  },
  border: {
    backgroundColor: "light",
    boxShadow: "0 1px 2px 1px #063970",
  },
  img: {
    textAlign: "center",
    margin: theme.spacing(0),
  },

  typo: {
    textAlign: "center",
    marginTop: theme.spacing(0),
    color: "#063970",
  },
}));

export default function Login() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} container justifyContent="center">
          <Box className={classes.border}>
            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
                variant="fullWidth"
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#063970",
                  },
                }}
              >
                <Tab label="SIGN IN" {...a11yProps(0)} />
                <Tab label="SIGN UP" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <SignIn />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <SignUp />
            </TabPanel>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box className={classes.img}>
            <img
              // height="80%"
              width="105%"
              src="https://www.careersportal.co.za/sites/default/files/images/2018/TJP_logo.png"
              alt="logo"
            />
          </Box>
          <Box className={classes.header}>
            <Typography className={classes.typo} variant="h3">
              Welcome to Job-Portal
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
