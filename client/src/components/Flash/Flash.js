// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import type { MapStateToProps } from 'react-redux'

import * as actions from './flashActions'

import './Flash.css'

type Props = {
  flash: {
    type: void | string,
    message: void | string,
  },
  closeFlash: Function,
}

export class Flash extends Component<Props> {
  renderMessage () {
    if (this.props.flash) {
      return (
        <section
          className={classnames('flash', {
            'flash-success': this.props.flash.type === 'success',
            'flash-danger': this.props.flash.type === 'danger',
            'flash-warning': this.props.flash.type === 'warning',
          })}
          onClick={this.props.closeFlash}>
          {this.props.flash.message}
        </section>
      )
    }
    return null
  }

  render () {
    return this.renderMessage()
  }
}

const mapStateToProps: MapStateToProps<*, *, *> = ({ flash }) => {
  return {
    flash,
  }
}

export default connect(mapStateToProps, actions)(Flash)
