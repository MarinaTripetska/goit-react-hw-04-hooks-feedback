import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../Buttons'

export default function FeedbackOptions({ options, onClick }) {
  return (
    <div>
      {options.map(option => (
        <Button key={option} type="button" name={option} onClick={onClick}>
          {option}
        </Button>
      ))}
    </div>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  leaveFeedback: PropTypes.func,
}
