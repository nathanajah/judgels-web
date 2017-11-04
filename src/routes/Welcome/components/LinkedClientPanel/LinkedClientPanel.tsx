import * as React from 'react'
import { Segment } from 'semantic-ui-react'

interface LinkedClientPanelProps {
  label: string;
  link: string;
}

export const LinkedClientPanel = ({ label, link }: LinkedClientPanelProps) => (
  <Segment>
    <a href={link}>{label}</a>
  </Segment>
)

export default LinkedClientPanel
