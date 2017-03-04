import React from 'react'
import { Grid } from 'semantic-ui-react'

export const TwoColumnLayout = ({ upperWidgets, menu, lowerWidgets, children, isSidebarShown }) => {
  if (isSidebarShown) {
    return (
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
    )
  } else {
    return (
      <Grid>
        <Grid.Column width='sixteen'>
          { children }
        </Grid.Column>
      </Grid>
    )
  }
}

TwoColumnLayout.propTypes = {
  upperWidgets: React.PropTypes.array,
  menu: React.PropTypes.element,
  lowerWidgets: React.PropTypes.array,
  children: React.PropTypes.node,
  isSidebarShown: React.PropTypes.bool
}

export default TwoColumnLayout
