import React, { Component } from 'react';
import { ListItem } from './ListItem';

class CategoryTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
    this.expandSubmenu = this.expandSubmenu.bind(this)
  }
  expandSubmenu() {
    this.setState({
      active: !this.state.active
    })
  }
  
  render() {
    const { itemClick, categoryName, ...snippets } = this.props;
    const activeClass = this.state.active ? 'category-sublist category-sublist__open' : 'category-sublist';
    const iconClass = this.state.active ? 'fas fa-chevron-down light-gray list-icon list-icon__active' : 'fas fa-chevron-down light-gray list-icon';
    let snippetArray = Object.values(snippets);
    return (
      <div className="bb b--white-70 pointer bg-dark-blue">
        <div className="pa3 ma0 flex justify-between items-center" onClick={this.expandSubmenu}>
          <h2 className="ma0 light-gray">{categoryName}</h2>
          <i className={iconClass}></i>
        </div>
        <div className={activeClass}>
          {snippetArray.map((s, i) => (
            <ListItem key={i} name={s.name} description={s.description} html={s.html} updateView={itemClick}/>
          ))}
        </div>
      </div>
    );
  }
}

export default CategoryTop;