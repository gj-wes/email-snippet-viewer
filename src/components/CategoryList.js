import React from 'react';
import CategoryTop from './CategoryTop';
import data from '../data/data.json';

const categories = ["Adobe", "Client targeting", "Semantic", "Snippets"];

export const CategoryList = ({update}) => (
  <nav className="bt b--white-70">
    {categories.map((d, i) => (
      <CategoryTop itemClick={update} categoryName={d} {...data[d]} key={i}/>  
    ))}
  </nav>
);