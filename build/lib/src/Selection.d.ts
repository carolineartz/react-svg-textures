import * as React from 'react';
export default class Selection {
    children: Selection[];
    attrs: Record<string, any>;
    tagName?: string;
    constructor(tagName?: string);
    append(tagName?: string): Selection;
    attr(key: string, value: any): Selection;
    toReact(components: any): JSX.Element | React.ReactNode;
}
