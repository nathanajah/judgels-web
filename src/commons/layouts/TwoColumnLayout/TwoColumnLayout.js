import React from 'react'
import { Grid } from 'semantic-ui-react'

export const TwoColumnLayout = ({ upperWidgets, menu, lowerWidgets, children }) => {
  return (
    <Grid fluid>
      <Grid.Column width='four'>
        { upperWidgets }
        { menu }
        { lowerWidgets }
      </Grid.Column>
      <Grid.Column width='twelve'>
        { children }
      </Grid.Column>
    </Grid>
  )
}

TwoColumnLayout.propTypes = {
  upperWidgets: React.PropTypes.array,
  menu: React.PropTypes.element,
  lowerWidgets: React.PropTypes.array,
  children: React.PropTypes.node
}

export default TwoColumnLayout
