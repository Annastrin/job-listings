import React from 'react';
import classNames from 'classnames';
import useStyles from './card-styles';
import { Tag } from '../tag';

function Card(props) {
  const classes = useStyles();
  const tags = props.tags.map((tag, i) => {
    return <Tag name={tag} key={`tag-${i}`} onClick={props.onClickTag}/>;
  });

  return(
    <div className={classNames(classes.card, {[classes.featured]: props.featured})}>
      <img src={props.image} alt={props.company} className={classes.logo}/>
      <div className={classes.info}>
        <div className={classes.content}>
          <div>
            <h3 className={classes.company}>{props.company}</h3>
            <div className={classes.labels}>
              {props.new && <span className={`${classes.label} ${classes.new}`}>NEW!</span>}
              {props.featured && <span className={`${classes.label} ${classes.featured}`}>FEATURED</span>}
            </div>
          </div>
          <h2 className={classes.position}>{props.position}</h2>
          <div className={classes.meta}>
            <span>{props.postedAt}</span>&#8226;
            <span>{props.contract}</span>&#8226;
            <span>{props.location}</span>
          </div>
        </div>
      </div>
      <div className={classes.tags}>{tags}</div>
    </div>
  );
};

export default Card;