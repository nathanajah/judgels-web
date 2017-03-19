import Breadcrumbs from 'components/Breadcrumbs'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  const breadcrumbSections = state.breadcrumbs.sections
  const breadcrumbIds = state.breadcrumbs.breadcrumbIds
  const breadcrumbEntries = []
  for (let i = 0; i < breadcrumbIds.length; i++) {
    const id = breadcrumbIds[i]
    const sections = breadcrumbSections.get(id)
    for (let j = 0; j < sections.length; j++) {
      breadcrumbEntries.push(sections[j])
    }
  }
  return {
    entries: breadcrumbEntries
  }
}

export const JophielBreadcrumbsContainer = connect(mapStateToProps)(Breadcrumbs)
