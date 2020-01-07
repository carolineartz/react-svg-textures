import * as React from 'react';
declare type LinesProps = {
    id?: string;
    size?: number;
    strokeWidth?: number;
    orientation?: string;
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
declare type LinesState = {
    pattern: React.ReactNode;
};
export default class Lines extends React.Component<LinesProps, LinesState> {
    state: LinesState;
    constructor(props: LinesProps);
    componentDidMount(): void;
    componentDidUpdate(oldProps: LinesProps): void;
    generate(): void;
    render(): React.ReactNode;
}
export {};
