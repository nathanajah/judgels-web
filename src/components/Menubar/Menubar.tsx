import { Tab2, Tabs2 } from '@blueprintjs/core';
import { withRouter, NavLink, matchPath } from 'react-router-dom';
import * as React from 'react';
import { History, Location } from 'history';
import { RouteComponentProps } from 'react-router';

import './Menubar.css';

const tabToPath = (id: string) => {
  switch (id) {
    case 'home':
      return '/';
    case 'competition':
      return '/competition';
    default:
      return '/';
  }
};

const navigateTo = (history: History, id: string) => {
  const path = tabToPath(id);
  history.push({
    pathname: path,
  });
};

const pathToTab = (location: Location) => {
  if (matchPath(location.pathname, { path: '/', exact: true })) {
    return 'home';
  } else if (matchPath(location.pathname, { path: '/competition' })) {
    return 'competition';
  } else {
    return 'home';
  }
};

class MenubarComponent extends React.Component<RouteComponentProps<{}>> {
  render() {
    const selectedTabId = pathToTab(this.props.location);

    return (
      <div className="menubar">
        <div className="menubar__content">
          <Tabs2
            id="menubar"
            renderActiveTabPanelOnly
            selectedTabId={selectedTabId}
            onChange={navigateTo.bind(null, this.props.history)}
          >
            <Tab2 id="home">Home</Tab2>
            <Tab2 id="competition">
              <NavLink to="/competition"> Competition </NavLink>
            </Tab2>
          </Tabs2>
        </div>
      </div>
    );
  }
}

export const Menubar = withRouter<{}>(MenubarComponent);
