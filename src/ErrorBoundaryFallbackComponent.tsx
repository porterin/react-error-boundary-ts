import * as React from 'react';

interface ErrorInfo {
  componentStack: string,
};

interface Props {
  error?: Error,
  info?: ErrorInfo,
}

class ErrorBoundaryFallBackComponent extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const {error, info} = this.props

    return <div>
      <div>{String(error)}</div>
      <div>{String(info?.componentStack)}</div>
    </div>;
  }
}

export default ErrorBoundaryFallBackComponent;
