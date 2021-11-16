import React from 'react'
import PropTypes from 'prop-types'
import s from './Section.module.css'

export default function Section({ title, children }) {
  return (
    <section className={s.section}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
}
