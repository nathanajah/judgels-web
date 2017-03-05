import React from 'react'
import Header from 'commons/components/Header'
import Footer from 'commons/components/Footer'
import './CoreLayout.scss'
import 'commons/styles/core.scss'
import { Grid, Container } from 'semantic-ui-react'

export class CoreLayout extends React.Component {
  render () {
    const { children, breadcrumbs, linkedClients } = this.props
    return (
      <Container fluid>
        <Header />
        <Grid container>
          <Grid.Row>
            { linkedClients }
          </Grid.Row>
          <Grid.Row style={{ padding: '0px' }}>
            { breadcrumbs }
          </Grid.Row>
          <Grid.Row>
            { children }
          </Grid.Row>
        </Grid>
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
