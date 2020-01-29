import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import green from '@material-ui/core/colors/green';
const green_primary = green[800]; // #F44336

export default function Title(props) {
  return (
    <Typography component="h2" variant="h6" color={green_primary} gutterBottom>
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};