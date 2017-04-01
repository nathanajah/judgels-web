import LinkedClientsView from 'components/LinkedClientsView'
import { connect } from 'react-redux'

const mapStateToProps = () => ({
  clients: [{
    link: '#',
    label: 'Repository Gate'
  }]
})

export default connect(mapStateToProps)(LinkedClientsView)
