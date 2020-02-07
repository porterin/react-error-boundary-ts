import * as React from 'react';
import ErrorBoundaryFallbackComponent from "./ErrorBoundaryFallbackComponent";


interface Props {
  children?: any,
  handleError?: (error: Error, componentStack: string) => boolean,
  onErrorFallbackComponent?: (error: Error, componentStack: string) => React.Component,
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
    const { handleError } = this.props;
    if (handleError && handleError(error, info ? info.componentStack : "")) {
      this.setState({ error, info });
    }
  }

  render() {
    const { children, onErrorFallbackComponent, handleError } = this.props;
    const { error, info } = this.state;

    if (error) {
      return (
        <div>
          {onErrorFallbackComponent
            ? onErrorFallbackComponent(error, info ? info.componentStack : "") :
            <ErrorBoundaryFallbackComponent error={error} info={info} />
          }
        </div>
      )
    }
    return children
  }
}


export default ErrorBoundary;
