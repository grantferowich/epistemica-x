import React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// read the rows from the program id 
const rows = [
    { user: "0x34567", score: 14.7},
    { user: "0x456", score: 75.1},
    { user: "0x111", score: -0.2}
]

const rowsObj = rows.sort((a,b) => {
    return b.score - a.score
})

export default function Leaderboard() {
  return (
    <div>
    <h3>Leaderboard</h3>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>User</TableCell>
          <TableCell align="right">Return</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rowsObj.map((row, index) => (
          <TableRow
            key={index}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.user}
            </TableCell>
            <TableCell align="right">{row.score}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  )
}
