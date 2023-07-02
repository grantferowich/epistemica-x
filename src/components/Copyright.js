/* 
High level overview of this file: Copyright.js
Date: June 25, 2023
The Copyright.js file basically returns the copyright information
which appears at the bottom of application pages.

*/

import React from "react";
import Typography from '@mui/material/Typography';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"© Epistemica-X "}
      {new Date().getFullYear()}
    </Typography>
  );
}
