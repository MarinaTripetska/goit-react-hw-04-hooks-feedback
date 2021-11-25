import PropTypes from 'prop-types'
import s from './Button.module.css'
const classNames = require('classnames')

export default function Button({ className, name, onClick, children, ...args }) {
  const defaultStyles = s.btn
  const classes = classNames(defaultStyles, className)

  return (
    <button className={classes} name={name} onClick={onClick}>
      {children}
    </button>
  )
}

Button.prototypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
}
