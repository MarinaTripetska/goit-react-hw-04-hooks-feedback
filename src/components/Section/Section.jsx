import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SectionStyled = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 100px;
`

export default function Section({ title, children }) {
  return (
    <SectionStyled>
      <h1>{title}</h1>
      {children}
    </SectionStyled>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
}
