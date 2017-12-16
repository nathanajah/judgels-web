import * as React from 'react'
import Footer from 'components/Footer'
import './CoreLayout.css'
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

interface CoreLayoutProps {
  header: JSX.Element;
  children: JSX.Element;
  showBreadcrumb: boolean;
  breadcrumbs: JSX.Element;
  linkedClients: JSX.Element;
}

export class CoreLayout extends React.Component<CoreLayoutProps> {
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

export default CoreLayout
