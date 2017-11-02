import React from 'react'
import './Footer.scss'
import { Container, Grid, Header } from 'semantic-ui-react'

export const Footer = () => (
  <footer style={{ 'backgroundColor': '#f5f6f7' }}>
    <Container>
      <Grid columns={2} stackable style={{ marginBottom: 0 }}>
        <Grid.Column textAlign='left'>
          <Header>
            <Header.Subheader>
              © 2017 Judgels
            </Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column textAlign='right'>
          <Header>
            <Header.Subheader>
              Powered by Judgels Jophiel 0.8.0. Sponsored by SIRCLO
            </Header.Subheader>
          </Header>
        </Grid.Column>
      </Grid>
    </Container>
  </footer>
)

export default Footer
