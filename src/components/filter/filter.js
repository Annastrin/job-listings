import React from 'react';
import useStyles from './filter-styles';
import { Tag } from '../tag';

function Filter(props) {
  const classes = useStyles();

  function handleClick(e) {
    e.preventDefault();
    props.onClick();
  }

  return(
    <div className={classes.filter}>
      <div className={classes.tags}>
        {props.tags.map((tag, i) => {
          return <Tag name={tag} filter key={`filter-${tag}-${i}`} onClickRemove={props.onClickTagRemove}/>
        })}
      </div>
      <button className={classes.clear} onClick={handleClick}>Clear</button>
    </div>
  );
}

export default Filter;