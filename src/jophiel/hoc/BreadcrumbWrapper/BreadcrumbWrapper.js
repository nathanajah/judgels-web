import React from 'react'

export const BreadcrumbWrapper = (links) => (InnerComponent) => {
  class WrappedComponent extends React.Component {
    componentDidMount () {
    }

    render () {
      return <component props={this.props} />
    }
  }
  return WrappedComponent
}
