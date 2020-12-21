import React from "react";
import { createUseStyles } from "react-jss";
import { ReactComponent as RemoveIcon } from './icon-remove.svg';
import {colors} from '../app/app-styles';

export function CloseBtn(props) {
  const classes = useStyles();

  function handleClick() {
    props.onClick(props.tag);
  }

  return (
    <button className={classes.close} onClick={handleClick}>
      <RemoveIcon className={classes.svg}/>
    </button>
  );
}
const useStyles = createUseStyles({
  close: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: 32,
    height: 32,
    border: 0,
    padding: 0,
    backgroundColor: `${colors.Primary}`,
    textAlign: 'center',
    cursor: 'pointer'
  }
});
