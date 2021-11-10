import { Component } from 'react';
import Section from './components/Section';
import Statistic from './components/Statistic';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';
class App extends Component {
  state = {     
  good: 0,
  neutral: 0,
    bad: 0,
    sumTotal: 0,
  goodFeedback: 0
  }
  
  leaveFeedback = (ev) => {
    
    this.setState((prevState) => {
       return {
         [ev.target.name]: prevState[ev.target.name] + 1,
       
     } 
    }, this.countTotalFeedback)
    
  }

  countTotalFeedback=()=>{
    const { good, neutral, bad } = this.state;
    this.setState({
       sumTotal:  (good + neutral + bad) 
    },
      this.countPositiveFeedbackPercentage);
   
  }

  countPositiveFeedbackPercentage = () => {
    const { good, sumTotal } = this.state;
    this.setState({
      goodFeedback: Math.floor(100 * good / sumTotal)
    })
  }
  

  render() {
    const { good, neutral, bad, sumTotal, goodFeedback} = this.state;
    return(
      <Section title='Please leave feedback'>
        <FeedbackOptions options={['good', 'neutral', 'bad']} leaveFeedback={this.leaveFeedback} />
        {sumTotal > 0
          ? <Statistic good={good} neutral={neutral} bad={bad} total={sumTotal} positivePercentage={goodFeedback} />
           
          : <Notification message={"No feedback given"}/>
        }
        
        
    </Section>
  );
 }
  
}

export default App;
