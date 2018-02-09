import { Tab2, Tabs2 } from '@blueprintjs/core';
import { withRouter, matchPath } from 'react-router-dom';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import * as React from 'react';
import { RouteComponentProps, RouteProps } from 'react-router';

import './Menubar.css';

export interface MenubarItem {
  title: string;
  route: RouteProps;
}
export interface MenubarProps {
  items: { [id: string]: MenubarItem };
  matchOrder: string[];
  displayOrder: string[];
}

export interface MenubarConnectedProps {
  onNavigate: (url: string) => void;
}

class MenubarContainer extends React.Component<RouteComponentProps<{}> & MenubarProps & MenubarConnectedProps> {
  constructor() {
    super();
    this.onTabChange = this.onTabChange.bind(this);
  }

  getActiveItemID() {
    const { items, location, matchOrder, displayOrder } = this.props;
    const matchedIDs = matchOrder.filter(id => matchPath(location.pathname, items[id].route) !== null);
    if (matchedIDs.length === 0) {
      return displayOrder[0];
    } else {
      return matchedIDs[0];
    }
  }

  onTabChange(newTabID) {
    const item = this.props.items[newTabID];
    const path = item.route.path ? item.route.path : '/';
    this.props.onNavigate(path);
  }

  render() {
    const selectedTabId = this.getActiveItemID();

    return (
      <div className="menubar">
        <div className="menubar__content">
          <Tabs2 id="menubar" renderActiveTabPanelOnly selectedTabId={selectedTabId} onChange={this.onTabChange}>
            {this.props.displayOrder.map(id => {
              const item = this.props.items[id];
              return (
                <Tab2 key={id} id={id}>
                  {item.title}
                </Tab2>
              );
            })}
          </Tabs2>
        </div>
      </div>
    );
  }
}

function createMenubarContainer() {
  const mapDispatchToProps = dispatch => ({
    onNavigate: (url: string) => dispatch(push(url)),
  });
  return connect(undefined, mapDispatchToProps)(MenubarContainer);
}

export default withRouter<any>(createMenubarContainer());
