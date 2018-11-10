import styled from 'styled-components'
import {
    color,
    width,
    space,
    display,
} from 'styled-system'

const Box = styled.div`
  ${space}
  ${width}
  ${color}
  ${display}
`;

Box.propTypes = {
    ...space.propTypes,
    ...width.propTypes,
    ...color.propTypes
};

Box.displayName = 'Box';

export default Box
