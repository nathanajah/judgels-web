import * as React from 'react'
import { Container, Grid } from 'semantic-ui-react'

interface TwoColumnLayoutProps {
  upperWidgets?: JSX.Element[];
  menu?: JSX.Element;
  lowerWidgets: JSX.Element[];
  children: JSX.Element;
}

export const TwoColumnLayout = ({ upperWidgets, menu, lowerWidgets, children }: TwoColumnLayoutProps) => {
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

export default TwoColumnLayout
