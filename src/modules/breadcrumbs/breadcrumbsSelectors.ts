import { createSelector } from 'reselect';

import { AppState } from '../store';

export const selectSortedBreadcrumbs = createSelector([(state: AppState) => state.breadcrumbs.values], values =>
  values.slice().sort((a, b) => a.link.length - b.link.length)
);

export const selectDocumentTitle = createSelector([selectSortedBreadcrumbs], breadcrumbs => {
  let title = (window as any).env.APP_NAME;
  if (breadcrumbs.length) {
    title = `${breadcrumbs[breadcrumbs.length - 1].title} | ${title}`;
  }
  return title;
});
