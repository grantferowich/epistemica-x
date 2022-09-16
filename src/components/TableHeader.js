import React from "react";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const headCells = [
  {
    id: "check",
    numeric: "true",
    disablePadding: true,
    label: ""
  },
  {
    id: "coin",
    numeric: true,
    disablePadding: false,
    label: "Coin"
  },
  { id: "symbol", numeric: true, disablePadding: false, label: "Symbol" },
  { id: "price", numeric: true, disablePadding: false, label: "Price" },
  { id: "change", numeric: true, disablePadding: false, label: "24h Δ" },
  { id: "marketCap", numeric: true, disablePadding: false, label: "Market Cap" }
];

export default function EnhancedTableHead(props) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            padding={headCell.disablePadding ? "none" : "default"}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
