import styled from 'styled-components'
import {
  color,
  width,
  space,
  display,
  style,
} from 'styled-system'

const fontSize = style({
  prop: 'fontSize',
  cssProperty: 'fontSize',
  key: 'fontSizes',
  transformValue: n => n + 'px',
  scale: [0, 4, 8, 16, 32],
});

const Box = styled.p`
  ${space}
  ${width}
  ${color}
  ${display}
  ${fontSize},
`;

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...color.propTypes
};

Box.displayName = 'Box';

export default Box
