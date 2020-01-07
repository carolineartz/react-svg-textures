var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import textures from 'textures';
import isEqual from 'lodash.isequal';
import Selection from './Selection';
var Lines = (function (_super) {
    __extends(Lines, _super);
    function Lines(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            pattern: React.createElement("div", null)
        };
        return _this;
    }
    Lines.prototype.componentDidMount = function () {
        this.generate();
    };
    Lines.prototype.componentDidUpdate = function (oldProps) {
        if (!isEqual(oldProps, this.props)) {
            this.generate();
        }
    };
    Lines.prototype.generate = function () {
        var _this = this;
        var t = textures.lines();
        [
            'size',
            'strokeWidth',
            'orientation',
            'shapeRendering',
            'stroke',
            'background',
            'id'
        ].forEach(function (key) {
            if (_this.props[key]) {
                t[key](_this.props[key]);
            }
        });
        var selection = new Selection();
        t(selection);
        this.setState({
            pattern: selection.toReact(this.props.components),
        });
    };
    Lines.prototype.render = function () {
        return this.state.pattern;
    };
    return Lines;
}(React.Component));
export default Lines;
//# sourceMappingURL=Lines.js.map