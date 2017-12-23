import * as classNames from 'classnames';
import * as React from 'react';

import './ContentWithSidebar.css';

export interface ContentWithSidebarProps {
  sidebarElement: JSX.Element;
  contentElement: JSX.Element;
  smallContent?: boolean;
}

export const ContentWithSidebar = (props: ContentWithSidebarProps) => (
  <div className="content-with-sidebar">
    <div className="content-with-sidebar__sidebar">
      {props.sidebarElement}
    </div>
    <div className={classNames('content-with-sidebar__content', { 'content-with-sidebar__content--small': props.smallContent })}>
      {props.contentElement}
    </div>
  </div>
);
