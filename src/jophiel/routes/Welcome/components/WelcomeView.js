import React from 'react'
import { LinkedClientPanel } from './LinkedClientPanel'
import DocumentTitle from 'react-document-title'
import { Grid, Header } from 'semantic-ui-react'

export const WelcomeView = ({ title, linkedClients }) => (
  <DocumentTitle title={title} >
    <Grid columns={1}>
      <Grid.Column>
        <Header as='h2'> Welcome </Header>
        <p> &nbsp; </p>
        <p>Hi, there! You are logged in to Judgels.</p>
        <p> You can now visit one of the following Judgels applications:</p>

        { linkedClients.map(({ label, link }) => <LinkedClientPanel key={link} label={label} link={link} />) }
      </Grid.Column>
    </Grid>
  </DocumentTitle>
)

WelcomeView.propTypes = {
  linkedClients: React.PropTypes.arrayOf(React.PropTypes.object),
  title: React.PropTypes.string
}
