import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Outer = styled(Box)`
  height: ${props => props.height};
  width: 100%;
  background-color: rebeccapurple;
  margin-bottom: 1.45rem;
`

export const Masthead = ({ height, siteTitle }) => {
  return (
    <Outer height={height}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`
        }}
      >
        {siteTitle}
      </Link>
    </Outer>
  )
}

Masthead.propTypes = {
  height: PropTypes.string.isRequired,
  siteTitle: PropTypes.string
}
