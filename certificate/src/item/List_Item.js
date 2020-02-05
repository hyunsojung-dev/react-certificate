import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AssignmentIcon from '@material-ui/icons/Assignment';

// import AnnouncementRoundedIcon from '@material-ui/icons/AnnouncementRounded';
// import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
// import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';

// import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
// import Problem from './containers/Problem';
// import Homeview from './containers/Home';
// import YearComment from './containers/yearData/evaluation'

// export const mainListItems = (
//     <Router>
//     <div>
//     <Link to="/" >
//     <ListItem button>
//       <ListItemIcon>
//         <AnnouncementRoundedIcon />
//       </ListItemIcon>
//       <ListItemText primary="문제 풀기" /> 
//     </ListItem> 
//     </Link>    
//     <Link to="/Problem" >
//     <ListItem button>
//       <ListItemIcon>
//         <CreateRoundedIcon />
//       </ListItemIcon>
//       <ListItemText primary="문제 요청" />
//     </ListItem>
//     </Link>
//     <Link to="/comment" >
//     <ListItem button>
//       <ListItemIcon>
//         <ImportContactsRoundedIcon />
//       </ListItemIcon>
//       <ListItemText primary="년도별 리스트" />
//     </ListItem>
//     </Link> 
//     </div>
//          <div>
//             <Route exact path="/" component={Homeview}/>
//             <Route path="/Problem" component={Problem}/>
//             <Route path="/comment" component={YearComment}/>
//          </div>
//     </Router>
// );

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="user information" />
    </ListItem>
  </div>
);