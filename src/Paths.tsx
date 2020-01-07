import * as React from 'react';
import textures from 'textures';
import isEqual from 'lodash.isequal';

import Selection from './Selection';

type PathTexture =
  | 'squares'
  | 'nylon'
  | 'waves'
  | 'woven'
  | 'caps'
  | 'crosses'
  | 'hexagons'

type PathsProps = {
  size?: number;
  strokeWidth?: number;
  d?: PathTexture | Function;
  shapeRendering?: string;
  stroke?: string;
  background?: string;
  id?: string;
  components?: {
    defs?: Function | string;
    g?: Function | string;
    circle?: Function | string;
    rect?: Function | string;
    pattern?: Function | string;
    path?: Function | string;
  };
};

type PathsState = {
  pattern: React.ReactNode
}

export default class Paths extends React.Component<PathsProps, PathsState> {
  state: PathsState = {
    pattern: <div />
  };

  constructor(props: PathsProps) {
    super(props);
  }

  componentDidMount() {
    this.generate();
  }

  componentDidUpdate(oldProps: PathsProps) {
    if (!isEqual(oldProps, this.props)) {
      this.generate();
    }
  }

  generate(): void {
    const t: Function = textures.paths();
    [
      'size',
      'strokeWidth',
      'shapeRendering',
      'stroke',
      'background',
      'id',
      'd',
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
