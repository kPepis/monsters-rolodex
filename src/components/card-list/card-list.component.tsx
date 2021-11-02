import React, { PropsWithChildren } from 'react';
import type { Monster } from '../../typings/Monster';
import './card-list.styles.css';
import Card from '../card/card.component';

interface CardProps {
  monsters: Monster[];
}

export const CardList = (props: PropsWithChildren<CardProps>) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};
