import { useState, useEffect } from 'react'
import Section from './components/Section'
import Statistic from './components/Statistic'
import FeedbackOptions from './components/FeedbackOptions'
import Notification from './components/Notification'

function App(props) {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [sumTotal, setSumTotal] = useState(0)
  const [goodFeedback, setGoodFeedback] = useState(0)

  useEffect(() => {
    const startState = JSON.parse(localStorage.getItem('state'))
    const { good, neutral, bad, sumTotal, goodFeedback } = startState
    setGood(good)
    setBad(bad)
    setNeutral(neutral)
    setSumTotal(sumTotal)
    setGoodFeedback(goodFeedback)
  }, [])

  const handleChange = e => {
    switch (e.target.name) {
      case 'good':
        setGood(prev => prev + 1)
        break

      case 'neutral':
        setNeutral(prev => prev + 1)
        break

      case 'bad':
        setBad(prev => prev + 1)
        break

      default:
        return
    }
  }

  useEffect(() => {
    setSumTotal(good + bad + neutral)
  }, [good, neutral, bad])

  useEffect(() => {
    setGoodFeedback(() => {
      return Math.floor((100 * good) / sumTotal)
    })
  }, [good, sumTotal])

  useEffect(() => {
    return localStorage.setItem(
      'state',
      JSON.stringify({
        good,
        neutral,
        bad,
        sumTotal,
        goodFeedback,
      }),
    )
  })
  const handleRefresh = () => {
    setGood(0)
    setBad(0)
    setNeutral(0)
    setSumTotal(0)
    setGoodFeedback(0)
  }
  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={['good', 'neutral', 'bad']} onClick={handleChange} />
      {sumTotal > 0 ? (
        <Statistic
          handleRefresh={handleRefresh}
          good={good}
          neutral={neutral}
          bad={bad}
          total={sumTotal}
          positivePercentage={goodFeedback}
        />
      ) : (
        <Notification message={'No feedback given'} />
      )}
    </Section>
  )
}

export default App
