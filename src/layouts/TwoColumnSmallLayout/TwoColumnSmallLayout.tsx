import * as React from 'react';

import './TwoColumnSmallLayout.css';

export const TwoColumnSmallLayout = (props) => (
  <div className="layout-two-col-small">
    <div className="layout-two-col-small__left">
      {props.children[0]}
    </div>
    <div className="layout-two-col-small__right">
      {props.children[1]}
    </div>
  </div>
);
