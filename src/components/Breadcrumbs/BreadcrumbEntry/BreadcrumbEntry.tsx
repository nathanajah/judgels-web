import * as React from 'react'

export interface BreadcrumbsEntryProps {
  label: string;
  link: string;
  position: number;
}

export const BreadcrumbEntry = ({ label, link, position }: BreadcrumbsEntryProps) => (
  <span>
    <a href={link} className='breadcrumb-link'>{label} </a>
    <span>&nbsp;&rsaquo;&nbsp;</span>
  </span>
)

export default BreadcrumbEntry
