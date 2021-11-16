import React from 'react'
import PropTypes from 'prop-types'
import s from './FeedbackOptions.module.css'

export default function FeedbackOptions({ options, leaveFeedback }) {
  return (
    <div>
      {options.map(option => (
        <button className={s.btn} type="button" key={option} name={option} onClick={leaveFeedback}>
          {option}
        </button>
      ))}
    </div>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  leaveFeedback: PropTypes.func,
}
