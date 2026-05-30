import { useState } from 'react'
import TopicSelector from './components/TopicSelector'
import Quiz from './components/Quiz'
import Results from './components/Results'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('home')
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [quizResults, setQuizResults] = useState(null)

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic)
    setCurrentView('quiz')
  }

  const handleQuizComplete = (results) => {
    setQuizResults(results)
    setCurrentView('results')
  }

  const handleRestart = () => {
    setCurrentView('home')
    setSelectedTopic(null)
    setQuizResults(null)
  }

  const handleRetry = () => {
    setCurrentView('quiz')
    setQuizResults(null)
  }

  return (
    <div className="app">
      {currentView === 'home' && (
        <TopicSelector onSelectTopic={handleTopicSelect} />
      )}
      {currentView === 'quiz' && (
        <Quiz topic={selectedTopic} onComplete={handleQuizComplete} />
      )}
      {currentView === 'results' && (
        <Results
          results={quizResults}
          onRestart={handleRestart}
          onRetry={handleRetry}
        />
      )}
    </div>
  )
}

export default App
