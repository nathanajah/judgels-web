import { Icon, Menu, MenuItem, Popover, Position } from '@blueprintjs/core';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { User } from '../../modules/api/jophiel/user';
import { AppState } from '../../modules/store';

import './UserWidget.css';

export interface UserWidgetProps {
  user?: User;
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
        <MenuItem text="My account" href="/account" />
        <MenuItem text="Log out" href="/logout" />
      </Menu>
    );

    return (
      <div className="pt-navbar-group pt-align-right">
        <img src={user.avatarUrl} className="widget-user__avatar" />
        <Popover className="widget-user__popover" content={menu} position={Position.BOTTOM} inline>
          <div className="widget-user__user">
            <span className="widget-user__user__username">{user.username}</span>{' '}
            <Icon iconName="pt-icon-chevron-down" />
          </div>
        </Popover>
      </div>
    );
  };

  private renderForGuest = () => {
    return (
      <div className="pt-navbar-group pt-align-right">
        <div className="widget-user__link">
          <Link data-key="login" to="/login">
            Log in
          </Link>
        </div>
        <div className="widget-user__link">
          <Link data-key="register" to="/register">
            Register
          </Link>
        </div>
      </div>
    );
  };
}

export function createUserWidgetContainer() {
  const mapStateToProps = (state: AppState) => ({
    user: state.session.value && state.session.value.user,
  });

  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/19989
  const UserWidgetWrapper = (props: UserWidgetProps) => <UserWidget {...props} />;

  return connect(mapStateToProps)(UserWidgetWrapper);
}

const UserWidgetContainer = createUserWidgetContainer();
export default UserWidgetContainer;
