"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ErrorBoundaryFallbackComponent_1 = require("./ErrorBoundaryFallbackComponent");
;
;
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: undefined,
            info: undefined,
        };
    }
    componentDidCatch(error, info) {
        const { handleError } = this.props;
        if (handleError && handleError(error, info ? info.componentStack : "")) {
            this.setState({ error, info });
        }
    }
    render() {
        const { children, onErrorFallbackComponent, handleError } = this.props;
        const { error, info } = this.state;
        if (error) {
            return (React.createElement("div", null, onErrorFallbackComponent
                ? onErrorFallbackComponent(error, info ? info.componentStack : "") :
                React.createElement(ErrorBoundaryFallbackComponent_1.default, { error: error, info: info })));
        }
        return children;
    }
}
exports.default = ErrorBoundary;
