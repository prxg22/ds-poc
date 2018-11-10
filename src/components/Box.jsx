import styled from 'styled-components'
import React from 'react';
import PropTypes from 'prop-types'

import {
  color,
  width,
  space,
  display,
  background,
} from 'styled-system'

const Element = styled.div`
  ${space}
  ${width}
  ${color}
  ${display}
  ${background}
`;


/** @component */
export default class Box extends React.Component {
  static propTypes = {
    /** How much space a box will have in relation of your adjacents */
    space: PropTypes.number,
    /** How much width a box will occupy inside a row */
    width: PropTypes.number,
    /** Box color, this match a color that exists in theme.colors['<color>'] */
    color: PropTypes.string,
    /** Display property, can be: 'inline-block', 'block' , 'flex' */
    display: PropTypes.string,
    /** Which color a box can have */
    background: PropTypes.string,
  };

  render() {
    const {
      width,
      color,
      display,
      children,
      background,
    } = this.props;

    return (
      <Element
        background={background}
        width={width}
        color={color}
        display={display}
      >
        { children }
      </Element>
    )
  }
}
