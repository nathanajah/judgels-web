import * as React from 'react';

import './TwoColumnLayout.css';

export const TwoColumnLayout = (props) => (
  <div className="layout-two-col">
    <div className="layout-two-col__left">
      {props.children[0]}
    </div>
    <div className="layout-two-col__right">
      {props.children[1]}
    </div>
  </div>
);
