import React from 'react';
import classNames from 'classnames';
import useStyles from './tag-styles';
import { CloseBtn } from './closeBtn';

function Tag(props) {
  const classes = useStyles();

  function handleClick(e) {
    e.preventDefault();
    props.onClick(props.name);
  }

  const cardTagClick = props.filter ? {} : {onClick: handleClick}

  return(
    <div className={classNames(classes.tag, {[classes.withBtn]: props.filter})}
    {...cardTagClick}>
      <span>{props.name}</span>
      {props.filter && <CloseBtn tag={props.name} onClick={props.onClickRemove}/>}
    </div>
  );
}

export default Tag;