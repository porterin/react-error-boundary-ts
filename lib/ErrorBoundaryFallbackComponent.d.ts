import * as React from 'react';
interface ErrorInfo {
    componentStack: string;
}
interface Props {
    error?: Error;
    info?: ErrorInfo;
}
declare class ErrorBoundaryFallBackComponent extends React.Component<Props, any> {
    constructor(props: Props);
    render(): JSX.Element;
}
export default ErrorBoundaryFallBackComponent;
