import * as React from 'react';
import ErrorBoundaryFallbackComponent from "./ErrorBoundaryFallbackComponent";


interface Props {
  children?: any,
  fallbackComponent: (error: Error, componentStack: string) => React.Component,
  onError?: (error: Error, componentStack: string) => void,
}


interface ErrorInfo {
  componentStack: string,
};

interface State {
  error?: Error,
  info?: ErrorInfo,
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      error: undefined,
      info: undefined,
    }
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    const { onError } = this.props;

    if (typeof onError === 'function') {
      try {
        onError.call(this, error, info ? info.componentStack : '');
      } catch (ignoredError) { }
    }
    this.setState({ error, info });
  }

  render() {
    const { children, fallbackComponent } = this.props;
    const { error, info } = this.state;

    if (error) {
      return (
        <div>
          {fallbackComponent(error, info ? info.componentStack : "")}
        </div>
      )
    }
    return children
  }
}


export default ErrorBoundary;
