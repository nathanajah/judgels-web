import React from 'react'
import { connect } from 'react-redux'
import { breadcrumbsAdd, breadcrumbsRemove } from 'store/breadcrumbs'

export const BreadcrumbWrapper = (links) => {
  let generatedId = 0
  return (InnerComponent) => {
    class WrappedComponent extends React.Component {
      componentWillMount () {
        generatedId = generatedId + 1
        const { dispatch } = this.props
        dispatch(breadcrumbsAdd(generatedId, links))
      }

      render () {
        return <InnerComponent breadcrumbId={generatedId} {...this.props} />
      }

      componentWillUnmount () {
        const { dispatch } = this.props
        dispatch(breadcrumbsRemove())
      }
    }
    WrappedComponent.propTypes = {
      dispatch: React.PropTypes.func
    }
    return connect()(WrappedComponent)
  }
}
