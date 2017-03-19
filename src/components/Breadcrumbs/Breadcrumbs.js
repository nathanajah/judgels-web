import React from 'react'
import BreadcrumbEntry from './BreadcrumbEntry'
import { Container } from 'semantic-ui-react'

export const Breadcrumbs = ({ entries }) => (
  <Container fluid>
    {
      entries.map(({ label, link }, position) => (
        <BreadcrumbEntry key={position} label={label} link={link} position={position} />
      ))
    }
  </Container>
)

Breadcrumbs.propTypes = {
  entries: React.PropTypes.array.isRequired
}

export default Breadcrumbs
