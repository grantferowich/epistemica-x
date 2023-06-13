import React, {useState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { TableHead } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setUserEmail, setUserId, setUserName } from '../actions/userActions';

let columns;

columns = [ { id: 'Name', label: 'Name', minWidth: 170 },
  { id: 'Symbol', label: 'Symbol', minWidth: 80 },
  {
    id: 'Price',
    label: 'Price ($)',
    minWidth: 40,
    align: 'left',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'Change',
    label: '24hΔ',
    minWidth: 100,
    align: 'left',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'MarketCapitalization',
    label: 'Market Capitalization',
    minWidth: 100,
    align: 'left',
    format: (value: number) => value.toFixed(2),
  },
];

export default function FullTable(props) {

  // const dispatchFn = useDispatch();

  // const updateUserStore = (userObj) => {
  //   let dataHM = userObj.data.userObj;
  //   dispatchFn(setUserName(dataHM.name));
  //   dispatchFn(setUserEmail(dataHM.email));
  //   dispatchFn(setUserId(dataHM._id));
  // }

  // const loggedInUserObj = localStorage.getItem('user');
  // console.log('loggedInUserObj', loggedInUserObj)
  // if (loggedInUserObj !== null && loggedInUserObj.name) {
  //     console.log('Someone is logged in...');
  //     updateUserStore(loggedInUserObj);
  // };

  const [maxHeightInt, setMaxHeightInt] = useState(500) 

  useEffect(()=>{
    const viewportHeightInt = window.innerHeight
    setMaxHeightInt(viewportHeightInt)
  }, [])

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <Paper  sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: maxHeightInt }}>
          <Table
            stickyHeader 
            aria-label="sticky table"
          >
          <TableHead>
          <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight: 'bold'}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
            <TableBody>
              {props.rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover  tabIndex={-1} key={row[1]}>
                      <TableCell
                        scope="row"
                        padding="normal"
                      >
                        {row[0]}
                      </TableCell>
                      <TableCell>{row[1]}</TableCell>
                      <TableCell>{`$${row[2].toLocaleString(undefined, { maximumFractionDigits: 2 })}`}</TableCell>
                      <TableCell>
                        {row[3].toString().slice(0, 4) + "%"}
                      </TableCell>
                      <TableCell>{`$${row[4].toLocaleString(undefined, { maximumFractionDigits: 2 })}`}</TableCell>
                     </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count='250'
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
