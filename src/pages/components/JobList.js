import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useGetAllJobsQuery } from "../features/JoblistApi";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  LinearProgress,
  makeStyles,
  Modal,
  Typography,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import WorkIcon from "@material-ui/icons/Work";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";

const useStyles = makeStyles((theme) => ({
  grid: {
    flexGrow: 1,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
  },
  card: {
    backgroundColor: "#063970",
    color: "white",
  },
  cardContent: {
    color: "white",
    overflow: "hidden",
  },
  cardTypo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconGap: {
    marginRight: theme.spacing(1),
  },
  typo: {
    textAlign: "center",
  },
  button: {
    marginBottom: theme.spacing(2),
  },
  createButton: {
    textAlign: "right",
  },

  th: {
    backgroundColor: "#063970",
    color: "white",
    textAlign: "center",
    fontSize: "20px",
    padding: theme.spacing(2),
  },
}));

const columns = [
  {
    field: "jobTitle",
    headerName: "Post Name",
    // width: 150,
    flex: 1.3,
  },
  {
    field: "jobType",
    headerName: "Type",
    // width: 120,
    flex: 1,
  },
  {
    field: "location",
    headerName: "Location",
    // width: 130,
    flex: 1,
    sortable: false,
  },

  {
    field: "shift",
    headerName: "Shift",
    // width: 120,
    flex: 0.5,
  },
  {
    field: "vacancies",
    headerName: "Vacancies",
    type: "number",
    // width: 120,
    flex: 0.5,
    sortable: false,
  },
  {
    field: "lastDateOfApply",
    headerName: "Expire Date",
    type: "number",
    // width: 170,
    flex: 1,
  },
  {
    field: "edit",
    headerName: "Edit",
    sortable: false,
    width: 130,
    // flex: 1,
    disableClickEventBubbling: true,
    renderCell: () => {
      return (
        <>
          {" "}
          <IconButton size="small">
            <EditIcon
              fontSize="small"
              style={{
                color: "green",
              }}
            />
          </IconButton>
          <IconButton size="small">
            <DeleteIcon
              fontSize="small"
              style={{
                color: "red",
              }}
            />
          </IconButton>
          <IconButton size="small">
            <VisibilityIcon
              fontSize="small"
              style={{
                color: "DodgerBlue	",
              }}
            />
          </IconButton>
        </>
      );
    },
  },
];

export default function DataTable() {
  const classes = useStyles();
  const { data, isLoading } = useGetAllJobsQuery();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ width: "100%" }}>
      <div className={classes.grid}>
        <Grid container spacing={8}>
          <Grid item xs={6} sm={3}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom className={classes.cardTypo}>
                  {" "}
                  <WorkIcon className={classes.iconGap} />
                  TOTAL ACTIVE JOB
                </Typography>
                <Typography variant="h5" className={classes.typo}>
                  5
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom className={classes.cardTypo}>
                  <PeopleAltIcon className={classes.iconGap} />
                  INTERVIEW SCHEDULE
                </Typography>
                <Typography variant="h5" className={classes.typo}>
                  200
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom className={classes.cardTypo}>
                  <PeopleAltIcon className={classes.iconGap} />
                  NEW HIRING
                </Typography>
                <Typography variant="h5" className={classes.typo}>
                  5
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom className={classes.cardTypo}>
                  <PeopleAltIcon className={classes.iconGap} />
                  TOTAL APPLICANTS
                </Typography>
                <Typography variant="h5" className={classes.typo}>
                  200
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      <Box className={classes.createButton}>
        <Button
          style={{
            backgroundColor: "green",
          }}
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleOpen}
          startIcon={<AddCircleIcon />}
        >
          Create Job
        </Button>
      </Box>
      {isLoading && <LinearProgress />}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <>hello world</>
      </Modal>
      {data && (
        <>
          <AppBar position="static" className={classes.th}>
            <Typography variant="h5" noWrap>
              RECENT JOB POST
            </Typography>
          </AppBar>
          <DataGrid
            autoHeight
            rows={data}
            columns={columns}
            rowsPerPage={2}
            checkboxSelection
            disableSelectionOnClick
          />
        </>
      )}
    </div>
  );
}
