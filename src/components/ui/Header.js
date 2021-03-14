import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import { Tabs } from "@material-ui/core";
// import  Button from '@material-ui/core/Button';

import logo from "../../assets/learning_app.png";
// import {Link} from 'react-router-dom';
import Avatar from "@material-ui/core/Avatar";

import { useOvermind } from "../others/OvermindHelper";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "7em",
  },
  tabsContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  avatar: {
    marginRight: "25px",
  },
}));

export default function Header(props) {
  const { state, actions } = useOvermind();

  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position={"fixed"}>
          <Toolbar disableGutters>
            <img alt={"company logo"} className={classes.logo} src={logo} />
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabsContainer}
              indicatorColor={"primary"}
            >
              {/* <Tab className={classes.tab} component = {Link} to='/home' label={'Home'}/>
                            <Tab className={classes.tab} component = {Link} to='/lectures' label={'Lectures'} />
                            <Tab className={classes.tab} component = {Link} to='/favourites' label={'Favourites'} />
                            {/* <Tab className = {classes.tab} label = {'Profile'} /> */}
              {/* <Tab className={classes.tab} component = {Link} to='/about' label={'About Us'} /> */}

              <Avatar
                alt="Remy Sharp"
                src={state.url}
                className={classes.avatar}
              />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
