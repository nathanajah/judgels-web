import { Icon, Tab2, Tabs2 } from '@blueprintjs/core';
import * as React from 'react';

import { Card } from '../Card/Card';

import './Sidebar.css';

export interface SidebarItem {
  id: string;
  title: string;
}

export interface SidebarProps {
  id: string;
  title: string;
  parentPath: string;
  items: SidebarItem[];
  onItemClick: (parentPath: string, itemId: string) => void;
}

interface SidebarState {
  selectedItemId?: string;
}

export class Sidebar extends React.Component<SidebarProps> {
  state: SidebarState = {};

  componentDidMount() {
    this.setState({
      selectedItemId: this.props.items[0].id,
    });
  }

  render() {
    const { id, title, items } = this.props;
    const tabs = items.map(item => {
      const icon = (item.id === this.state.selectedItemId) && (
        <Icon iconName="chevron-right" iconSize={Icon.SIZE_LARGE} className="card-sidebar__arrow"/>
      );

      return (
        <Tab2 key={item.id} id={item.id}>
          <span>{item.title}</span>
          {icon}
        </Tab2>
      );
    });

    return (
      <Card className="card-sidebar" title={title}>
        <Tabs2 id={id} onChange={this.onItemClick} vertical renderActiveTabPanelOnly>
          {tabs}
        </Tabs2>
      </Card>
    );
  }

  private onItemClick = (itemId: string) => {
    this.props.onItemClick(this.props.parentPath, itemId);
    this.setState({
      selectedItemId: itemId,
    });
  };
}
