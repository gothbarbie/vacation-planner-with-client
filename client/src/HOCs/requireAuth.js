// @flow
import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router-dom'

import query from '../queries/Auth'

import type { RouterHistory } from 'react-router-dom'

type Props = {
  data: {
    auth: {} | void,
    loading: boolean,
  },
  history: RouterHistory,
}

export default (WrapperComponent) => {
  class RequireAuth extends Component<Props> {
    componentWillUpdate (nextProps: Props) {
      if (!nextProps.data.loading && !nextProps.data.auth) {
        nextProps.history.push('/')
      }
    }

    render () {
      return <WrapperComponent {...this.props} />
    }
  }

  return graphql(query)(withRouter(RequireAuth))
}
