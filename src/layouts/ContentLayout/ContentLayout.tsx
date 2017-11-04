import * as React from 'react'

interface ContentLayoutProps {
  children: JSX.Element;
}

export const ContentLayout = ({ children }: ContentLayoutProps) => (
  <div className='primary-content clearfix'>
    { children }
  </div>
)

export default ContentLayout
