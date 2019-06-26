import React, { Component } from 'react'
class ErrorBoundary extends Component {
constructor(props) {
 super(props)
  this.state = {
    hasError: false
 }
}
static getDerivedStateFromError(error) {
 return {
  hasError: true
 }
}

componentDidCatch(error, info) {
    try {
        throw error
    } catch(e) {
        console.log('error', e)
        window.newrelic.noticeError(e)
    }
}
render() {
 if (this.state.hasError) {
  return <h2>Some Error Spotted here!</h2>
 }
 return this.props.children
 }
}
export default ErrorBoundary