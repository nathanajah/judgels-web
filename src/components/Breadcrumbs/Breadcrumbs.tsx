import * as React from 'react'
import { BreadcrumbEntry, BreadcrumbsEntryProps } from './BreadcrumbEntry'
import { Container } from 'semantic-ui-react'

interface BreadcrumbsProps {
  entries: BreadcrumbsEntryProps[];
}

export const Breadcrumbs = ({ entries }: BreadcrumbsProps) => (
  <Container fluid>
    {
      entries.map(({ label, link }, position) => (
        <BreadcrumbEntry key={position} label={label} link={link} position={position} />
      ))
    }
  </Container>
)

export default Breadcrumbs
