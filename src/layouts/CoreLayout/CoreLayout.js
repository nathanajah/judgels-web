import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import './CoreLayout.scss'
import 'styles/core.scss'
import { Container } from 'semantic-ui-react'

const colors = {
  grey: '#f5f6f7',
  white: '#ffffff'
}

const styles = {
  topContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  linkedClientDiv: {
    backgroundColor: colors.white
  },
  breadcrumbsDiv: {
    backgroundColor: colors.grey,
    paddingBottom: '30px'
  },
  childrenDiv: {
    flexGrow: 1,
    backgroundColor: colors.grey
  }
}

export class CoreLayout extends React.Component {
  render () {
    const { children, breadcrumbs, linkedClients } = this.props
    return (
      <Container fluid style={styles.topContainer}>
        <Header />
        <div style={styles.linkedClientDiv} >
          <Container>
            { linkedClients }
          </Container>
        </div>
        <div style={styles.breadcrumbsDiv} >
          <Container>
            { breadcrumbs }
          </Container>
        </div>
        <div style={styles.childrenDiv}>
          <Container>
            { children }
          </Container>
        </div>
        <Footer />
      </Container>
    )
  }
}

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired,
  breadcrumbs: React.PropTypes.element.isRequired,
  linkedClients: React.PropTypes.element.isRequired
}

export default CoreLayout
