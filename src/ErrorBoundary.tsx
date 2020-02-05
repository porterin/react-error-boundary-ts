import * as React from 'react';
import ErrorBoundaryFallbackComponent from "./ErrorBoundaryFallbackComponent";


interface Props {
  children?: any,
  showFallbackComponent?: (error: Error, componentStack: string) => boolean,
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
    this.setState({ error, info });
  }

  getFallbackComponent = (showFallbackComponent: boolean, error: Error, info: ErrorInfo, onErrorFallbackComponent: (error: Error, componentStack: string) => React.Component, children: any) => {
    if (showFallbackComponent) {
      onErrorFallbackComponent ? onErrorFallbackComponent(error, info ? info.componentStack : "") :
        <ErrorBoundaryFallbackComponent error={error} info={info} />
    }
    return children
  }

  render() {
    const { children, onErrorFallbackComponent, showFallbackComponent } = this.props;
    const { error, info } = this.state;

    if (error && showFallbackComponent && showFallbackComponent(error, info ? info.componentStack : "")) {
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
