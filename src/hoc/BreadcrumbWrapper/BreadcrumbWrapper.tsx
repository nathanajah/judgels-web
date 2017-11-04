import * as React from 'react'
import { connect } from 'react-redux'
import { breadcrumbsAdd, breadcrumbsRemove } from 'store/breadcrumbs'

export const BreadcrumbWrapper = (links) => {
  let generatedId = 0
  return (InnerComponent) => {
    interface WrappedComponentProps {
      dispatch: any;
    }

    class WrappedComponent extends React.Component<WrappedComponentProps> {
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
    return connect()(WrappedComponent)
  }
}
