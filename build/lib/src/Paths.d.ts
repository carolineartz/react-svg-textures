import * as React from 'react';
declare type PathTexture = 'squares' | 'nylon' | 'waves' | 'woven' | 'caps' | 'crosses' | 'hexagons';
declare type PathsProps = {
    id?: string;
    size?: number;
    strokeWidth?: number;
    d?: PathTexture | Function;
    shapeRendering?: string;
    stroke?: string;
    background?: string;
    components?: {
        defs?: Function | string;
        g?: Function | string;
        circle?: Function | string;
        rect?: Function | string;
        pattern?: Function | string;
        path?: Function | string;
    };
};
declare type PathsState = {
    pattern: React.ReactNode;
};
export default class Paths extends React.Component<PathsProps, PathsState> {
    state: PathsState;
    constructor(props: PathsProps);
    componentDidMount(): void;
    componentDidUpdate(oldProps: PathsProps): void;
    generate(): void;
    render(): React.ReactNode;
}
export {};
