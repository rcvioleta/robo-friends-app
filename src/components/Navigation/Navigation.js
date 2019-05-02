import React from 'react';

import './Navigation.css';

const Navigation = props => {
  return (
    <header className="app-nav">
      <h1>Robo Friends</h1>
      <input type="text" placeholder="Search your robo friend..." onChange={props.searchHandler}/>
    </header>
  )
}

export default Navigation;