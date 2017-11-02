import React from 'react'
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
    const { header, children, breadcrumbs, showBreadcrumb, linkedClients } = this.props
    return (
      <Container fluid style={styles.topContainer}>
        { header }
        <div style={styles.linkedClientDiv} >
          { linkedClients }
        </div>
        {
          showBreadcrumb && (
            <div style={styles.breadcrumbsDiv} >
              <Container>
                { breadcrumbs }
              </Container>
            </div>
          )
        }
        <div style={styles.childrenDiv}>
          { children }
        </div>
        <Footer />
      </Container>
    )
  }
}

CoreLayout.propTypes = {
  header: React.PropTypes.element.isRequired,
  children : React.PropTypes.element.isRequired,
  showBreadcrumb: React.PropTypes.bool.isRequired,
  breadcrumbs: React.PropTypes.element.isRequired,
  linkedClients: React.PropTypes.element.isRequired
}

export default CoreLayout
