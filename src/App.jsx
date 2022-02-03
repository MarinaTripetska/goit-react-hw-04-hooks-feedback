import useLocalStorage from './hooks/useLocalStorage'
import Section from './components/Section'
import Statistic from './components/Statistic'
import FeedbackOptions from './components/FeedbackOptions'
import Notification from './components/Notification'

function App() {
  const [good, setGood] = useLocalStorage('good', 0)
  const [neutral, setNeutral] = useLocalStorage('neutral', 0)
  const [bad, setBad] = useLocalStorage('bad', 0)

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

  const handleRefresh = () => {
    setGood(0)
    setBad(0)
    setNeutral(0)
  }

  const sumTotal = good + neutral + bad
  const goodFeedback = Math.floor((100 * good) / sumTotal)

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
        <Notification>No feedback given</Notification>
      )}
    </Section>
  )
}

export default App
