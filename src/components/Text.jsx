import styled from 'styled-components'
import React from 'react';
import PropTypes from 'prop-types';

import {
  color,
  style,
} from 'styled-system'

const fontSize = style({
  prop: 'fontSize',
  cssProperty: 'fontSize',
  key: 'fontSizes',
  transformValue: n => n + 'px',
  scale: [0, 4, 8, 16, 32],
});

const Element = styled.p`
  ${color}
  ${fontSize}
`;

/** @component */
export default class Text extends React.Component {
  static propTypes = {
    color: PropTypes.string,
    fontSize: PropTypes.number,
    text: PropTypes.string,
  };

  render() {
    const {
      text,
      color,
      fontSize
    } = this.props;

    return (
      <Element
        color={color}
        fontSize={fontSize}
      >
        { text }
      </Element>
    )
  }
}
