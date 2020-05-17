import React, { useState } from 'react';
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './header.scss';
import $ from 'jquery';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
// import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Link, animateScroll as scroll } from "react-scroll";


const drawerWidth = 240;

$(window).scroll(function () {
  var sc = $(window).scrollTop()
  if (sc > 100) {
    $("#header-sroll").addClass("small")
  } else {
    $("#header-sroll").removeClass("small")
  }
});
const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    background: 'black',
    boxShadow: '0 3px 5px 2px rgba(0, 30, 52, .3)',
    color: 'white',
    textTransform: 'none'
  },
  title: {
    flexGrow: 1,
    color: 'yellow',
    fontFamily: 'Martel, serif',
    '@media screen and (max-width: 500px)': {
      display: 'block',
      marginRight: 50
    }
  },
  subTitle: {
    color: 'yellow'
  },
  contactUs: {
    color: 'skyblue'
  },
  buttons: {
    '@media screen and (max-width: 400px)': {
      display: 'block',
      paddingLeft: '10'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  appBar: {
    flexGrow: 1,
    background: '#206ff2',
    boxShadow: '0 3px 5px 2px rgba(0, 30, 52, .3)',
    color: 'white',
    textTransform: 'none',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});
const linkArray = [
  {
    link: 'Home',
    classId: 'root',
  },
  {
    link: 'Why Us?',
    classId: 'parent-feature-cards',
  },
  {
    link: 'About',
    classId: 'facts-content',
  },
  {
    link: 'Contact Us',
    classId: 'footer',
  }
];

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false, linkValue: [0,1,1,1],
    };
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChange = (val) => {
    let newArray = this.state.linkValue.map((item, index) => {
      if(val === index) {
        return 0;
      } else {
        return 1;
      }
    })
    // console.log(newArray);
    this.setState({ linkValue: newArray });
  };

  toggleDrawer = (linkValue, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
  };

  render() {
    const { classes } = this.props;
    const { open, linkValue } = this.state;
    return (
      <div>
        <CssBaseline />
        <AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: open, })}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <strong>Alita</strong>
            </Typography>
            <div className={classes.buttons}>
              <div className="container">
                <div className="row">
                  {
                    linkArray.map((item, i) => 
                    <Link to={item.classId}>
                    <Tabs value={linkValue[i]} onClick={()=>this.handleChange(i)}>
                      <Tab label={item.link} />
                    </Tabs>
                    </Link>
                    )
                  }
                </div>
              </div>
            </div>
            <IconButton edge="end" onClick={this.handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.hide)}
              color="inherit" aria-label="open drawer">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton color='secondary' onClick={this.handleDrawerClose}>
              <ChevronRightIcon />
            </IconButton>
          </div>
          <Divider />
          {linkArray.map((linkValue) => (
            <React.Fragment key={linkValue.link}>
              <Button onClick={this.toggleDrawer(linkValue, true)}>
                <Link to={linkValue.classId}>
                  {linkValue.link}
                </Link>
              </Button>
            </React.Fragment>
          ))}
        </Drawer>
      </div>
    );
  }
}
export default withStyles(useStyles)(HeaderComponent);