import * as React from 'react';
import textures from 'textures';
import isEqual from 'lodash.isequal';

import Selection from './Selection';

type LinesProps = {
  size?: number;
  strokeWidth?: number;
  orientation?: string;
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

type LinesState = {
  pattern: React.ReactNode
}

// const defaultComponents = {
//   defs: "defs",
//   g: "g",
//   circle: "circle",
//   rect: "rect",
//   pattern: "pattern",
//   path: "path"
// }

// const getDefaultProps = (props: LinesProps): LinesProps => {
//   if (!props.components) {
//     props.components = defaultComponents;
//   }
//   return props
// }

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
