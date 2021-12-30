import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import GroupIcon from "@material-ui/icons/Group";
import { Outlet, Link } from "react-router-dom";
const drawerWidth = 60;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button component={Link} to={"/portal/home"}>
              <HomeIcon style={{ color: "#063970" }} />
            </ListItem>

            <ListItem button component={Link} to={"/portal/jobs"}>
              <WorkIcon style={{ color: "#063970" }} />
            </ListItem>

            <ListItem button component={Link} to={"/portal/users"}>
              <GroupIcon style={{ color: "#063970" }} />
            </ListItem>
            <ListItem button component={Link} to={"/portal/mails"}>
              <MailIcon style={{ color: "#063970" }} />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Outlet />
      </main>
    </div>
  );
}
