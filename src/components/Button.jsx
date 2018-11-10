import styled from 'styled-components'

import {
  space,
  width,
  color,
  display,
  buttonStyle,
} from 'styled-system';

const Button = styled.button`
  ${space}
  ${width}
  ${color}
  ${display}
  ${buttonStyle}
`;

Button.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...color.propTypes,
  ...display.propTypes,
};

Button.displayName= 'Button';

/** @component */
export default Button;
