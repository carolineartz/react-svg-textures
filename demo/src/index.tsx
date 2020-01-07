import React, { Component } from 'react'
import { render } from 'react-dom'

import Example from '../../src';

class Demo extends Component {
  render() {
    return (
      <svg width={200} height={200}>
        <Example.Paths
          id='my-paths'
          d="hexagons"
          strokeWidth={2}
          stroke='darkorange'
          size={8}
        />
        <circle cx={100} cy={100} r={200} fill='url(#my-paths)' />
      </svg>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
