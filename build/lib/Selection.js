var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import camel from 'lodash.camelcase';
import uuid from 'uuid/v1';
var Selection = (function () {
    function Selection(tagName) {
        this.children = [];
        this.attrs = {};
        this.tagName = tagName;
        return this;
    }
    Selection.prototype.append = function (tagName) {
        var child = new Selection(tagName);
        this.children.push(child);
        return child;
    };
    Selection.prototype.attr = function (key, value) {
        this.attrs[camel(key)] = value;
        return this;
    };
    Selection.prototype.toReact = function (components) {
        var children = this.children.map(function (child) { return child.toReact(components); });
        if (this.tagName) {
            return React.createElement(this.tagName, __assign({ key: uuid() }, this.attrs), children);
        }
        else {
            return children[0];
        }
    };
    return Selection;
}());
export default Selection;
//# sourceMappingURL=Selection.js.map