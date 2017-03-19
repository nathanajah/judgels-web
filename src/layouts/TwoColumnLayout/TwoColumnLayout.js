import React from 'react'
import { Container, Grid } from 'semantic-ui-react'

export const TwoColumnLayout = ({ upperWidgets, menu, lowerWidgets, children }) => {
  return (
    <Container fluid>
      <Grid>
        <Grid.Column width='four'>
          { upperWidgets }
          { menu }
          { lowerWidgets }
        </Grid.Column>
        <Grid.Column width='twelve'>
          { children }
        </Grid.Column>
      </Grid>
    </Container>
  )
}

TwoColumnLayout.propTypes = {
  upperWidgets: React.PropTypes.array,
  menu: React.PropTypes.element,
  lowerWidgets: React.PropTypes.array,
  children: React.PropTypes.node
}

export default TwoColumnLayout
