import React from 'react';
import type { Monster } from '../../typings/Monster';
import './card.styles.css';

interface CardProps {
  monster: Monster;
}

const Card = (props: CardProps) => (
  <div className="card-container">
    <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster" />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);

export default Card;
