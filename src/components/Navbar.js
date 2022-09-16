import React from "react";
import PropTypes from "prop-types";
// import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CoinTable from "./CoinTable";
import CreateBasketPage from "./CreateBasketPage";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper
//   }
// }));

export default function NavTabs(props) {
//   const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Coins" href="/coins" {...a11yProps(0)} />
          <LinkTab label="Baskets" href="/baskets" {...a11yProps(1)} />
          <LinkTab label="Create" href="/create" {...a11yProps(2)} />
          <LinkTab label="Sign in" href="/signin" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <CoinTable
          loggedIn={props.loggedIn}
          currentUserId={props.currentUserId}
        >
          {" "}
        </CoinTable>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CreateBasketPage
          loggedIn={props.loggedIn}
          currentUserId={props.currentUserId}
        ></CreateBasketPage>
      </TabPanel>
      
    </div>
  );
}
