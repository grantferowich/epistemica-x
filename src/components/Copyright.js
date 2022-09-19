import React from "react";
import Typography from '@mui/material/Typography';
export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © Epistemica X "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
