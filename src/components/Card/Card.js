import React from 'react';

import './Card.css';

const Card = props => {
  const content = props.robots.map(robot => {
    return (
      <div className="card" key={robot.id}>
        <img src={'https://robohash.org/' + (robot.id + 1)} alt={robot.name} />
        <h3>{robot.name}</h3>
        <p>{robot.email}</p>
      </div>  
    );
  });

  return <div className="flexbox">{content}</div>;
}

export default Card;