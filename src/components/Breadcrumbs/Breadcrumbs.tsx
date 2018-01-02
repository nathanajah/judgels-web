import * as classNames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { Breadcrumb } from '../../modules/breadcrumbs/breadcrumbsReducer';

import './Breadcrumbs.css';

export interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const items = props.breadcrumbs.map((item, idx) => (
    <li key={item.link}>
      <Link
        to={item.link}
        className={classNames('pt-breadcrumb', { 'pt-breadcrumb-current': idx === props.breadcrumbs.length - 1 })}
      >
        {item.title}
      </Link>
    </li>
  ));
  return (
    <div className="breadcrumbs">
      <div className="breadcrumbs__content">
        <ul className="pt-breadcrumbs">{items}</ul>
      </div>
    </div>
  );
};
