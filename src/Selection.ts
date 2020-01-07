import * as React from 'react';
import camel from 'lodash.camelcase';
import uuid from 'uuid/v1'

export default class Selection {
  children: Selection[] = []
  attrs: Record<string, any> = {}
  tagName?: string

  constructor(tagName?: string) {
    this.tagName = tagName;
    return this;
  }

  append(tagName?: string): Selection {
    const child = new Selection(tagName);
    this.children.push(child);
    return child;
  }

  attr(key: string, value: any): Selection {
    this.attrs[camel(key)] = value;
    return this;
  }

  toReact(components: any): JSX.Element | React.ReactNode {
    const children = this.children.map(child => child.toReact(components));

    if (this.tagName) {
      return React.createElement(
        this.tagName,
        {key: uuid(), ...this.attrs},
        children
      )
    }
    else {
      return children[0];
    }
  }
}