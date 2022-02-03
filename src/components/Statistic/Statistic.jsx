import PropTypes from 'prop-types'

import { ButtonRefreshStyled } from '../Buttons'
import { Thumb, Title, Item } from './Statistic.styled'

export default function Statistic({ handleRefresh, good, neutral, bad, total, positivePercentage }) {
  const handleRefreshClick = () => {
    handleRefresh()
  }

  return (
    <Thumb>
      <Title>Statistics:</Title>
      <div>
        <Item>
          <span>Good: </span> {good}
        </Item>
        <Item>
          <span>Neutral: </span> {neutral}
        </Item>
        <Item>
          <span>Bad: </span> {bad}
        </Item>
        <Item>
          <span>Total: </span> {total}
        </Item>
        <Item>
          <span>Positive Feedback: </span>
          {positivePercentage}%
        </Item>
      </div>
      <ButtonRefreshStyled type="button" aria-label="Refresh stats" onClick={handleRefreshClick}>
        Refresh stats
      </ButtonRefreshStyled>
    </Thumb>
  )
}

Statistic.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}
