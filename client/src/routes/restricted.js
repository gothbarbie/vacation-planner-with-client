// @flow

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { localStorageHelperGet } from '../utils/localStorage'

type Props = {
  history: {
    replace: Function,
  },
  location: {
    pathname: string,
  },
}

type State = {
  isAuthenticated: boolean,
}

const restricted = (BaseComponent: any) => {
  class Restricted extends Component<Props, State> {
    state = {
      isAuthenticated: false,
    }

    componentWillMount () {
      this.checkAuthentication(this.props)
    }

    componentWillReceiveProps (nextProps) {
      if (nextProps.location.pathname !== this.props.location.pathname) {
        this.checkAuthentication(nextProps)
      }
    }

    checkAuthentication (props) {
      if (!localStorageHelperGet('token')) {
        props.history.replace({ pathname: '/' })
        return
      }

      this.setState({
        isAuthenticated: true,
      })
    }

    render () {
      if (!this.state.isAuthenticated) {
        return null
      }

      return <BaseComponent {...this.props} />
    }
  }

  return withRouter(Restricted)
}

export default restricted
