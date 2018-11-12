import styled from 'styled-components'
import {
  space,
  alignItems,
  flexDirection,
  justifyContent,
  flexWrap,
} from 'styled-system'

const Row = styled.div`
  display: flex;
  ${flexWrap}
  ${space}
  ${flexDirection}
  ${justifyContent}
  ${alignItems}

  & > *:first-child {
    margin-left: 0;
  }

  & > *:last-child {
    margin-right: 0;
  }
`

Row.propTypes = {
  ...space.propTypes,
  ...flexDirection.propTypes,
  ...justifyContent.propTypes,
  ...alignItems.propTypes,
}

Row.defaultProps = {
  py: 10,
  alignItems: 'center',
  flexDirection: 'row'
}

Row.displayName = 'Row'

export default Row
