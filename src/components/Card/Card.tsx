import * as React from 'react';

import './Card.css';

export interface CardProps {
  title: string;
  children?: any;
}

export const Card = (props: CardProps) => (
  <div>
    <div className="pt-card card__title">
      <h3>{props.title}</h3>
    </div>
    <div className="pt-card card__content">
      {props.children}
    </div>
  </div>
);
