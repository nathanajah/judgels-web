import * as React from 'react'
import NavigationalLayout from 'layouts/NavigationalLayout'
import LinkedClientPanel from '../LinkedClientPanel'
import DocumentTitle from 'react-document-title'
import { Grid, Header } from 'semantic-ui-react'

interface LinkedClient {
  label: string;
  link: string;
}

interface WelcomeViewProps {
  linkedClients: LinkedClient[];
  title: string;
}

export const WelcomeView = ({ title, linkedClients }: WelcomeViewProps) => (
  <DocumentTitle title={title} >
    <NavigationalLayout>
      <Grid columns={1}>
        <Grid.Column>
          <Header as='h2'> Welcome </Header>
          <p> &nbsp; </p>
          <p>Hi, there! You are logged in to Judgels.</p>
          <p> You can now visit one of the following Judgels applications:</p>

          { linkedClients.map(({ label, link }) => <LinkedClientPanel key={link} label={label} link={link} />) }
        </Grid.Column>
      </Grid>
    </NavigationalLayout>
  </DocumentTitle>
)

export default WelcomeView
