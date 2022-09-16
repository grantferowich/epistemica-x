import * as React from 'react';
// import { makeStyles } from "@mui/styles";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import TableHeader from "./TableHeader";
import Copyright from "./Copyright";
import Box from '@mui/material/Box';

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: "100%"
//   },
//   paper: {
//     width: "100%",
//     marginBottom: theme.spacing(2)
//   },
//   table: {
//     minWidth: 750
//   },
//   visuallyHidden: {
//     border: 0,
//     clip: "rect(0 0 0 0)",
//     height: 1,
//     margin: -1,
//     overflow: "hidden",
//     padding: 0,
//     position: "absolute",
//     top: 20,
//     width: 1
//   }
// }));

export default function EnhancedTable(props) {
//   const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = event => {
    setDense(event.target.checked);
  };
  //API STRINGS
  const LOCAL_TEST_API = "http://localhost:3000";
  // const PRODUCTION_API = "https://gentle-wildwood-07928.herokuapp.com";
  // const FAVORITE_API = PRODUCTION_API + "/favorites";
  const FAVORITE_API = LOCAL_TEST_API + "/favorites";

  const handleAddToWatchList = event => {
    let coin_gecko_id = event.target.id;

    console.log(props.loggedIn);
    props.loggedIn
      ? fetch(FAVORITE_API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*"
          },
          body: JSON.stringify({
            favorite: {
              symbol: event.target.value,
              user_id: props.currentUserId,
              coin_gecko_id: coin_gecko_id
            }
          })
        })
          .then(response => console.log(response.status))
          .then(
            alert(
              `${event.target.value} was successfully added to your watchlist. You can view your basket or remove digital assets from your watchlist under Basket.`
            )
          )
      : alert(
          "This digital asset was not added to your watchlist. Please sign in to add a digital asset to your watchlist."
        );
  };

  return (
    <div>
      <Paper  sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table
            stickyHeader 
            aria-label="sticky table"
          >
            <TableHeader
              rowCount={props.rows.length}
            ></TableHeader>

            <TableBody>
              {props.rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow hover key={row[1]}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          onChange={handleAddToWatchList}
                          value={row[1]}
                          id={row[5]}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row[0]}
                      </TableCell>
                      <TableCell>{row[1]}</TableCell>
                      <TableCell>{"$" + row[2]}</TableCell>
                      <TableCell>
                        {row[3].toString().slice(0, 4) + "%"}
                      </TableCell>
                      <TableCell>{"$" + row[4]}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={props.rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
      <Box mt={8}>
        <Copyright />
      </Box>
    </div>
  );
}
