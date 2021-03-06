import React, { Component } from 'react'

import { ErrorIndicator } from '../ErrorIndicator'

export default class ErrorBoundry extends Component {
  state = {
    hasError: false,
    message: '',
  }

  componentDidCatch(err) {
    this.setState({
      hasError: true,
      message: err,
    })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }
    return this.props.children
  }
}
