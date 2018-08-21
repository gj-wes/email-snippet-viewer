import React from 'react';

export const ListItem = ({updateView, name, description, html}) => (
  <div className="sublist-item pv2 ph3 bg-light-blue bb b--black-70" onClick={() => updateView(html,(name === 'Webkit' ? 'css' : 'html'))}>
    <h3 className="mv1 near-black">{name}</h3>
    <p className="snippet-description mv0 f6 lh-copy near-black">{description}</p>
  </div>
);