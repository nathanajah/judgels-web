import { Icon, Menu, MenuItem, Popover, Position } from '@blueprintjs/core';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { User } from '../../../models/user';

import './UserWidget.css';

export interface UserWidgetProps {
  user?: User;
  handleLogOut: () => void;
}

export class UserWidget extends React.Component<UserWidgetProps> {
  render() {
    if (this.props.user) {
      return this.renderForUser(this.props.user);
    } else {
      return this.renderForGuest();
    }
  }

  private renderForUser = (user: User) => {
    const menu = (
      <Menu className="widget-user__user__menu">
        <MenuItem
          className="widget-user__user__logout"
          text="Log out"
          onClick={this.props.handleLogOut}
        />
      </Menu>
    );

    return (
      <div className="pt-navbar-group pt-align-right">
        <Popover className="widget-user__popover" content={menu} position={Position.BOTTOM} inline>
          <div className="widget-user__user">
            <a href="#">{user.username}</a> <Icon iconName="pt-icon-chevron-down"/>
          </div>
        </Popover>
      </div>
    );
  };

  private renderForGuest = () => {
    return (
      <div className="pt-navbar-group pt-align-right">
        <div className="widget-user__link">
          <Link className="widget-user__login" to="/login">Log in</Link>
        </div>
        <div className="widget-user__link">
          <Link className="widget-user__register" to="/register">Register</Link>
        </div>
      </div>
    );
  };
}
