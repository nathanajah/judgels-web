import TrainingView from '../../components/TrainingView'
import BreadcrumbWrapper from 'hoc/BreadcrumbWrapper'
import { connect } from 'react-redux'

const mapStateToProps = () => ({
  title: 'Training'
})

export const TrainingViewContainer =
  BreadcrumbWrapper([{ label: 'Training', link: 'training' }])(
    connect(mapStateToProps)(TrainingView)
  )

export default TrainingViewContainer
