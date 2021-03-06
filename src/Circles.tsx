import * as React from 'react';
import textures from 'textures';
import isEqual from 'lodash.isequal';

import Selection from './Selection';

type CirclesProps = {
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

type CirclesState = {
  pattern: React.ReactNode
}

export default class Circles extends React.Component<CirclesProps, CirclesState> {
  state: CirclesState = {
    pattern: <div />
  };

  constructor(props: CirclesProps) {
    super(props);
  }

  componentDidMount() {
    this.generate();
  }

  componentDidUpdate(oldProps: CirclesProps) {
    if (!isEqual(oldProps, this.props)) {
      this.generate();
    }
  }

  generate(): void {
    const t: Function = textures.lines();
    [
      'size',
      'strokeWidth',
      'stroke',
      'fill',
      'background',
      'id',
      'complement',
      'radius'
    ].forEach((key) => {
      if (this.props[key]) {
        t[key](this.props[key]);
      }
    });

    const selection = new Selection();
    t(selection);

    this.setState({
      pattern: selection.toReact(this.props.components),
    });
  }

  render() {
    return this.state.pattern;
  }
}
