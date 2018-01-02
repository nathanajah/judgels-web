import * as React from 'react';
import { connect } from 'react-redux';

import { Breadcrumbs, BreadcrumbsProps } from '../../components/Breadcrumbs/Breadcrumbs';
import { AppState } from '../../modules/store';
import { selectSortedBreadcrumbs } from '../../modules/breadcrumbs/breadcrumbsSelectors';

const BreadcrumbsContainer = (props: BreadcrumbsProps) => <Breadcrumbs {...props} />;

export function createBreadcrumbsContainer() {
  const mapStateToProps = (state: AppState) => ({
    breadcrumbs: selectSortedBreadcrumbs(state),
  });
  return connect(mapStateToProps)(BreadcrumbsContainer);
}

export default createBreadcrumbsContainer();
