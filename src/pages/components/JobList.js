import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useGetAllJobsQuery } from "../features/JoblistApi";
import {
  Box,
  Button,
  createTheme,
  Grid,
  LinearProgress,
  makeStyles,
  Modal,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  typo: {
    textAlign: "center",
  },
  button: {
    margin: theme.spacing(1),
  },
  createButton: {
    textAlign: "right",
  },
}));

const theme = createTheme({
  palette: {
    primary: green,
  },
});

const columns = [
  {
    field: "jobTitle",
    headerName: "Post Name",
    // width: 150,
    flex: 1,
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
    // width: 100,
    flex: 1,
    disableClickEventBubbling: true,
    renderCell: () => {
      return <Button variant="contained" startIcon={<EditIcon />}></Button>;
    },
  },
  // {
  //   field: "jobType",
  //   headerName: "Type",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.getValue(params.id, "firstName") || ""} ${
  //       params.getValue(params.id, "lastName") || ""
  //     }`,
  // },
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
      <Box className={classes.header}>
        <Typography className={classes.typo} variant="h5">
          RECENT JOB POST
        </Typography>
      </Box>
      {isLoading && <LinearProgress />}
      <Box className={classes.createButton}>
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleOpen}
            startIcon={<AddCircleIcon />}
          >
            Create Job
          </Button>
        </ThemeProvider>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <>hello world</>
      </Modal>
      {data && (
        <DataGrid
          autoHeight
          rows={data}
          columns={columns}
          pageSize={8}
          checkboxSelection
          disableSelectionOnClick
        />
      )}
    </div>
  );
}
