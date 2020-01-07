import * as React from 'react';
declare type CirclesProps = {
    id?: string;
    size?: number;
    strokeWidth?: number;
    stroke?: string;
    fill?: string;
    background?: string;
    complement?: boolean;
    radius?: number;
    components?: {
        defs?: Function | string;
        g?: Function | string;
        circle?: Function | string;
        rect?: Function | string;
        pattern?: Function | string;
        path?: Function | string;
    };
};
declare type CirclesState = {
    pattern: React.ReactNode;
};
export default class Circles extends React.Component<CirclesProps, CirclesState> {
    state: CirclesState;
    constructor(props: CirclesProps);
    componentDidMount(): void;
    componentDidUpdate(oldProps: CirclesProps): void;
    generate(): void;
    render(): React.ReactNode;
}
export {};
