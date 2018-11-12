import React from 'react'
import PropTypes from 'prop-types'
import styled, { isStyledComponent, css } from 'styled-components'
import {
  space,
  display,
  justifySelf,
  alignSelf,
  width,
  maxWidth,
  minWidth,
} from 'styled-system'

export const column = css`
  display: block;
  ${({ cols }) => maxWidth({ maxWidth: `calc((${(cols || 12) / 12}) * 100%)` })}
  ${({ cols }) => minWidth({ minWidth: `calc((${(cols || 12) / 12}) * 100%)` })}
  ${width({ width: '100%' })};
`

column.propTypes = {
  cols: PropTypes.number,
}

column.defaultProps = {
  width: 1,
}

const Column = styled.div``

const asColumn = (Component) => ({ cols, ...props }) => {
  if (!isStyledComponent(Component)) return (<Component {...props} />)

  const Wrapped = styled(Component)`
    ${column}
  `

  Wrapped.propTypes = {
    ...Component.propTypes,
    ...column.propTypes,
  }

  Wrapped.defaultProps = {
    ...Component.defaultProps,
    ...column.defaultProps,
  }

  return <Wrapped cols={cols} {...props} />
}

export default asColumn(Column)
