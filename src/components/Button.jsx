import styled from 'styled-components'
import React from 'react';
import PropTypes from 'prop-types'

import {
  space,
  width,
  color,
  display,
  buttonStyle,
} from 'styled-system';

const Element = styled.button`
  ${space}
  ${width}
  ${color}
  ${display}
  ${buttonStyle}
`;

/** @component */
/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
class Button extends React.Component {
  static propTypes = {
    /** How much space a component will have in relation of your adjacents */
    space: PropTypes.number,
    /** How much width a button will occupy inside a row */
    width: PropTypes.number,
    /** Button color, this match a color that exists in theme.colors['<color>'] */
    color: PropTypes.string,
    /** Display property, can be: ***inline-block*** | ***block*** | ***flex*** */
    display: PropTypes.string,
    /** Button variant property, can be: ***primary*** | ***secondary*** | ***tertiary*** */
    variant: PropTypes.string,
  };

  render() {
    const {
      variant,
      width,
      text,
    } = this.props;

    return (
      <Element
        variant={variant}
        width={width}
      >
        { text }
      </Element>
    );
  }

}

export default Button;
