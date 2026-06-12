import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Page render error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-grey-light px-4">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-6 text-4xl select-none">
              ⚠
            </div>
            <h1 className="font-heading text-2xl font-bold text-navy-dark mb-3">
              Something went wrong
            </h1>
            <p className="text-grey-medium mb-8 leading-relaxed">
              This page encountered an unexpected error. Please try refreshing the page or return to the homepage.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 border-2 border-navy text-navy font-semibold rounded-lg hover:bg-navy hover:text-white transition-all duration-300"
              >
                Refresh Page
              </button>
              <button
                onClick={() => { window.location.href = '/'; }}
                className="px-6 py-3 bg-gradient-to-r from-gold to-gold-dark text-navy-dark font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/25 transition-all duration-300"
              >
                Return Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
