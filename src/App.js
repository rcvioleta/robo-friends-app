import React, { useState, useEffect } from 'react';

import './App.css';
import Navigation from './components/Navigation/Navigation';
import Card from './components/Card/Card';

const App = props => {
  const [fetchedRobots, setFetchedRobots] = useState(null);
  const [searchField, setSearchField] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(data => setFetchedRobots(data))
    .catch(err => console.log(err))
  }, []);

  const searchHandler = event => {
    console.log('event triggered', event.target.value);
    setSearchField(event.target.value);
  }
  
  let robots = null

  if (fetchedRobots && !searchField) {
    robots = <Card robots={fetchedRobots} />
  } else if (searchField) {
    const filteredRobots = fetchedRobots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    robots = <Card robots={filteredRobots} />
  } else {
    robots = <h4>Fetching robo friends...</h4>
  }

  return (
    <div className="App">
      <Navigation searchHandler={searchHandler}/>
      <main>
        { robots }
      </main>
    </div>
  );
}

export default App;
