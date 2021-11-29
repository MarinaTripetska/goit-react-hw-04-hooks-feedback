import { useEffect } from 'react'
import useLocalStorage from './hooks/useLocalStorage'
import Section from './components/Section'
import Statistic from './components/Statistic'
import FeedbackOptions from './components/FeedbackOptions'
import Notification from './components/Notification'

function App() {
  const [good, setGood] = useLocalStorage('good', 0)
  const [neutral, setNeutral] = useLocalStorage('neutral', 0)
  const [bad, setBad] = useLocalStorage('bad', 0)
  const [sumTotal, setSumTotal] = useLocalStorage('sumTotal', 0)
  const [goodFeedback, setGoodFeedback] = useLocalStorage('goodFeedback', 0)

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [good, neutral, bad])

  useEffect(() => {
    setGoodFeedback(() => {
      return Math.floor((100 * good) / sumTotal)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [good, sumTotal])

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
