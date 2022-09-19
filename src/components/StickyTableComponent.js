import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { TableHead } from '@mui/material';



let columns;

columns = [ { id: 'Name', label: 'Name', minWidth: 170 },
  { id: 'Symbol', label: 'Symbol', minWidth: 100 },
  {
    id: 'Price',
    label: 'Price ($)',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'Change',
    label: '24hΔ',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'MarketCapitalization',
    label: 'Market Capitalization',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

export default function StickyHeadTable(props) {
  
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(50);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 50));
    setPage(0);
  };

  const handleChangeDense = event => {
    setDense(event.target.checked);
  };

  return (
    <div>
      <Paper  sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
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
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>

          </TableHead>
            <TableBody>
              {props.rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {

                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row[1]}>
                      
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
    </div>
  );
}
