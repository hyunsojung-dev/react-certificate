import React, { useState, useEffect } from 'react';
// react version 4 이기 때문에 react-router가 아니라 react-router-dom을 사용해야함 (버전마다 상이하게 다름)
// 리액트 v3 정적라우팅 , v4 동적 라우팅
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import { signIn } from './item/components/auth';
import AuthRoute from './item/components/AuthRoute';
import LoginForm from './item/components/LoginForm';
import LogoutButton from './item/components/LogoutButton';
import Problem from './item/containers/Problem';
import Homeview from './item/containers/Home';
import YearComment from './item/containers/yearData/evaluation'
// list_item 설정
import { secondaryListItems } from './item/List_Item';
// @material-ui 설정
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import Link2 from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AnnouncementRoundedIcon from '@material-ui/icons/AnnouncementRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';

// 대쉬보드 메인 색 변경
// import green from '@material-ui/core/colors/green';
// const green_primary = green[800];
import brown from '@material-ui/core/colors/brown';
const brown_primary = brown[500];


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link2 color="inherit" href="https://material-ui.com/">
        정보처리기사
      </Link2>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    background: brown_primary,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    //color: green_primary,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(6),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(8),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const [user, setUser] = useState(null);
  const authenticated = user != null;
  
  const login = ({ email, name }) => setUser(signIn({ email, name }));
  const logout = () => setUser(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


  return (
    <Router>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            React Certificate
          </Typography>
          <div style={{ float: "right", marginRight: 5}}>{authenticated ? (
                <LogoutButton logout={logout} />              
                ) : (
                <Link to="/login">
                    <div style={{fontSize: 15}}>Login</div>
                </Link>
                )}</div>
          {/* <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton> */}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        {/* <List>{mainListItems}</List> */}
          <div>
              <Link to="/" >
              <ListItem button>
                <ListItemIcon>
                  <AnnouncementRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="문제 풀기" /> 
              </ListItem> 
              </Link>    
              <Link to="/Problem" >
              <ListItem button>
                <ListItemIcon>
                  <CreateRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="문제 요청" />
              </ListItem>
              </Link>
              <Link to="/comment" >
              <ListItem button>
                <ListItemIcon>
                  <ImportContactsRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="년도별 리스트" />
              </ListItem>
              </Link> 
          </div>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
         <Switch>
            <Route exact path="/" component={Homeview}/>
            <Route
              path="/login"
              render={props => (
              <LoginForm authenticated={authenticated} login={login} {...props} />
              )} />
            <AuthRoute
              authenticated={authenticated}
              path="/Problem"
              render={props => <Problem user={user} {...props} /> }  />           
            <AuthRoute
              authenticated={authenticated}
              path="/comment"
              render={props => <YearComment user={user} {...props} />} />               

            {/* <Route path="/Problem" component={Problem}/>
            <Route path="/comment" component={YearComment}/> */}
         </Switch>
           
          <Box pt={6}>
            <Copyright />
          </Box>
        </Container> 
      </main>
    </div>
    </Router>
   
  );
}