
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      errorInfo: errorInfo,
    });
    console.error('Caught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      
      return (
        <div className=' text-danger '>
          <h2>Something went wrong.</h2>
          <p> {this.state.error && this.state.error.toString()}</p>
       
         
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;