import * as React from 'react';
interface Props {
    children?: any;
    handleError?: (error: Error, componentStack: string) => boolean;
    onErrorFallbackComponent?: (error: Error, componentStack: string) => React.Component;
}
interface ErrorInfo {
    componentStack: string;
}
interface State {
    error?: Error;
    info?: ErrorInfo;
}
declare class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props);
    componentDidCatch(error: Error, info: ErrorInfo): void;
    render(): any;
}
export default ErrorBoundary;
