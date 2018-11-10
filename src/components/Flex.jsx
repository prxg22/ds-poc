import styled from 'styled-components'
import React from 'react';
import PropTypes from 'prop-types'

import {
  space,
  width,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
} from 'styled-system'

const Element = styled.div`
  display: flex;
  ${space}
  ${width}
  ${alignItems}
  ${justifyContent}
  ${flexWrap}
  ${flexDirection};
`;

/** @component */
export default class Flex extends React.Component {
  static propTypes = {
    /** How much space a component will have in relation of your adjacents */
    space: PropTypes.string,
    /** How much width a button will occupy inside a row */
    width: PropTypes.number,
    /** items align method: ***flex-start*** | ***flex-end*** | ***center*** | ***baseline*** | ****stretch*** */
    alignItems: PropTypes.string,
    /** items justify method: ***flex-start*** | ***flex-end*** | ***center*** | ***space-between*** | ***space-around***
     *  ***space-evenly*** */
    justifyContent: PropTypes.string,
    /** how items will wrap inside flex container: nowrap, wrap, wrap-reverse */
    flexWrap: PropTypes.string,
    /** flex container main axis, row, row-reverse, column, column-reverse */
    flexDirection: PropTypes.string,
  };

  render() {
    return (
      <Element
        { ...this.props}
      >
        { this.props.children }
      </Element>
    )
  }
}
