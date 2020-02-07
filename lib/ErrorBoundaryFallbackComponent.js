"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
;
class ErrorBoundaryFallBackComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var _a;
        const { error, info } = this.props;
        return React.createElement("div", null,
            React.createElement("div", null, String(error)),
            React.createElement("div", null, String((_a = info) === null || _a === void 0 ? void 0 : _a.componentStack)));
    }
}
exports.default = ErrorBoundaryFallBackComponent;
