import React from 'react';
import Card from 'react-bootstrap/Card';
import Capture from './Capture.png';

function Player(props) {
    const { name, team, nationality, jersey, age, image }=props||{
        name: 'Hadj Sassi Mohamed',
        team: 'Bayern Fan',
        nationality: 'Tunisia',
        jersey: '12',
        age: '29',
        image: Capture
      }
  return (
    <Card style={{ width: '18rem', height: '600px', backgroundColor: 'rgb(183, 64, 64)' }}>
      <Card.Img variant="top" src={image} style={{ height: '400px' }} />
      <Card.Body style={{ color: 'white' }}>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team} <br />
          Nationality: {nationality} <br />
          Jersey Number: {jersey} <br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

Player.defaultProps = {
  name: 'Hadj Sassi Mohamed',
  team: 'Bayern Fan',
  nationality: 'Tunisia',
  jersey: '12',
  age: '29',
  image: Capture
};

export default Player;





