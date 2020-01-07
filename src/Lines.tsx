import * as React from 'react';
import textures from 'textures';
import isEqual from 'lodash.isequal';

import Selection from './Selection';

type LinesProps = {
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

type LinesState = {
  pattern: React.ReactNode
}

export default class Lines extends React.Component<LinesProps, LinesState> {
  state: LinesState = {
    pattern: <div />
  };

  constructor(props: LinesProps) {
    super(props);
  }

  componentDidMount() {
    this.generate();
  }

  componentDidUpdate(oldProps: LinesProps) {
    if (!isEqual(oldProps, this.props)) {
      this.generate();
    }
  }

  generate(): void {
    const t: Function = textures.lines();
    [
      'size',
      'strokeWidth',
      'orientation',
      'shapeRendering',
      'stroke',
      'background',
      'id'
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
