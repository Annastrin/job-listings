import React, { useState } from 'react';
import useStyles from './app-styles';
import { Header } from '../header';
import { Filter } from '../filter';
import { Card } from '../card';
import { data } from '../../data';

function App() {
  const classes = useStyles();
  const [tags, setTags] = useState([]);

  function addFilterTag(tagName) {
    if (tags.indexOf(tagName) === -1) {
      setTags([...tags, tagName]);
    }
  }

  function removeFilterTag(tagName) {
    const indexOfTagToRemove = tags.indexOf(tagName);
    const updatedTags = tags.filter((_, i) => i !== indexOfTagToRemove);
    setTags(updatedTags);
  }

  function clearTags() {
    setTags([]);
  }

  const cards = data.filter(card => {
    if (tags.length === 0) {
      return true;
    } else {
      const cardtags = [card.role, card.level, ...card.languages, ...card.tools]
      return tags.every(tag => cardtags.includes(tag));
    }
  }).map(i => {
    return <Card key={`card-${i.id}`}
                company={i.company}
                new={i.new}
                featured={i.featured}
                position={i.position}
                postedAt={i.postedAt}
                contract={i.contract}
                image={i.logo}
                location={i.location}
                tags={[i.role, i.level, ...i.languages, ...i.tools]}
                onClickTag={addFilterTag}/>
  });

  return (
    <div className={classes.app}>
      <Header/>
      <div className={classes.main}>
        <div className={classes.container}>
          {tags.length!==0 && <Filter tags={tags} onClick={clearTags} onClickTagRemove={removeFilterTag}/>}
          {cards}
        </div>
      </div>
    </div>
  );
}

export default App;
