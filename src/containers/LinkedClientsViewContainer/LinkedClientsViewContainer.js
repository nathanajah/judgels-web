import LinkedClientsView from 'components/LinkedClientsView'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

const mapStateToProps = () => ({
  clients: [
    {
      link: 'home',
      label: 'Home'
    },
    {
      link: 'training',
      label: 'Training Gate'
    },
    {
      link: 'competition',
      label: 'Competition Gate'
    }
  ]
})

const mapDispatchToProps = (dispatch) => {
  return {
    handleMoveHomepageTab: (link) => dispatch(push(link))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkedClientsView)
