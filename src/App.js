import React, { useState, useEffect } from 'react';
import './App.css';

const App = props => {
  const [fetchedRobots, setFetchedRobots] = useState(null);
  const [searchField, setSearchField] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(data => setFetchedRobots(data))
    .catch(err => console.log(err))
  }, []);

  // useEffect(() => {
  //   return () => {
  //     console.log('searching...', searchField);
  //   }
  // }, [searchField]);

  const searchHandler = event => {
    console.log('event triggered', event.target.value);
    setSearchField(event.target.value);
  }
  
  let robots = null

  if (fetchedRobots && !searchField) {
    robots = fetchedRobots.map(robot => (
      <div key={robot.id}>
        <h3>{robot.name}</h3>
        <p>{robot.email}</p>
        <p>{robot.phone}</p>
      </div>  
    ));
  } else if (searchField) {
    const filteredRobots = fetchedRobots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    robots = filteredRobots.map(robot => (
      <div key={robot.id}>
        <h3>{robot.name}</h3>
        <p>{robot.email}</p>
        <p>{robot.phone}</p>
      </div>  
    ));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>RoboFriendsApp</h1>
        <input type="text" placeholder="Search your robo friend" onChange={searchHandler}/>
      </header>
      <main>
        { robots }
      </main>
    </div>
  );
}

export default App;
