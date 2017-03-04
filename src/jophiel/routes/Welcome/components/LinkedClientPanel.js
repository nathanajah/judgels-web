import React from 'react'
import { Segment } from 'semantic-ui-react'

export const LinkedClientPanel = ({ label, link }) => (
  <Segment>
    <a href={link}>{label}</a>
  </Segment>
)

LinkedClientPanel.propTypes = {
  label: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired
}

export default LinkedClientPanel
