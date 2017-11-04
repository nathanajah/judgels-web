import CompetitionView from '../../components/CompetitionView'
import BreadcrumbWrapper from 'hoc/BreadcrumbWrapper'
import { connect } from 'react-redux'

const mapStateToProps = () => ({
  title: 'Competition'
})

export const CompetitionViewContainer =
  BreadcrumbWrapper([{ label: 'Competition', link: 'competition' }])(
    connect(mapStateToProps)(CompetitionView)
  )

export default CompetitionViewContainer
