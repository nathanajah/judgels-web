import React from 'react'
import Header from 'commons/components/Header'
import Footer from 'commons/components/Footer'
import './CoreLayout.scss'
import 'commons/styles/core.scss'
import { Grid, Container } from 'semantic-ui-react'

export class CoreLayout extends React.Component {
  render () {
    const { children, breadcrumbs, linkedClients, isFullscreen } = this.props
    let header = null
    let footer = null
    if (!isFullscreen) {
      header = <Header />
      footer = <Footer />
    }
    return (
      <Container fluid>
        { header }
        <Grid container>
          <Grid.Row>
            { linkedClients }
          </Grid.Row>
          <Grid.Row>
            { breadcrumbs }
          </Grid.Row>
          <Grid.Row>
            { children }
          </Grid.Row>
        </Grid>
        { footer }
      </Container>
    )
  }
}

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired,
  breadcrumbs: React.PropTypes.element.isRequired,
  linkedClients: React.PropTypes.element.isRequired,
  isFullscreen: React.PropTypes.bool
}

export default CoreLayout
