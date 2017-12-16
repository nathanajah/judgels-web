import { Tab2, Tabs2 } from '@blueprintjs/core';
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

export class Sidebar extends React.Component<SidebarProps> {
  render() {
    const { id, title, parentPath, items, onItemClick } = this.props;
    const tabs = items.map(item => <Tab2 key={item.id} id={item.id} title={item.title}/>);

    return (
      <Card className="card-sidebar" title={title}>
        <Tabs2 id={id} onChange={(itemId: string) => onItemClick(parentPath, itemId)} vertical renderActiveTabPanelOnly>
          {tabs}
        </Tabs2>
      </Card>
    );
  }
}
