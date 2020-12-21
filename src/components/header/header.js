import React from 'react';
import useStyles from './header-styles';

function Header() {
  const classes = useStyles();

  return(
    <header className={classes.header}></header>
  );
};

export default Header;