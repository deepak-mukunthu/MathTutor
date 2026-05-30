import { useState } from 'react'
import './TopicSelector.css'

const topics = [
  {
    id: 'arithmetic',
    name: 'Basic Arithmetic',
    description: 'Practice addition, subtraction, multiplication, and division',
    icon: '➕',
    difficulty: 'Easy'
  },
  {
    id: 'fractions',
    name: 'Fractions & Decimals',
    description: 'Master fractions, decimals, and percentages',
    icon: '½',
    difficulty: 'Medium'
  },
  {
    id: 'algebra',
    name: 'Pre-Algebra',
    description: 'Solve equations and work with variables',
    icon: 'x',
    difficulty: 'Medium'
  },
  {
    id: 'geometry',
    name: 'Geometry Basics',
    description: 'Area, perimeter, angles, and shapes',
    icon: '△',
    difficulty: 'Medium'
  },
  {
    id: 'word-problems',
    name: 'Word Problems',
    description: 'Apply math to real-world situations',
    icon: '📝',
    difficulty: 'Hard'
  },
  {
    id: 'mixed',
    name: 'Mixed Review',
    description: 'Challenge yourself with all topics',
    icon: '🎯',
    difficulty: 'Variable'
  }
]

function TopicSelector({ onSelectTopic }) {
  const [difficulty, setDifficulty] = useState('medium')

  return (
    <div className="topic-selector">
      <div className="header">
        <h1>🧮 Math Tutor</h1>
        <p className="tagline">Your Personal Math Coach</p>
        <div className="welcome-message">
          <span className="coach-icon">👨‍🏫</span>
          <p>Welcome! I'm here to help you become great at math. Pick a topic below and let's get to work. Remember: the only way to get better is to practice!</p>
        </div>
      </div>

      <div className="difficulty-selector">
        <label>Choose Your Challenge Level:</label>
        <p className="difficulty-hint">
          {difficulty === 'easy' && "Good starting point - build your confidence first."}
          {difficulty === 'medium' && "Solid choice - this will push you to think harder."}
          {difficulty === 'hard' && "Bold! This will test what you really know."}
        </p>
        <div className="difficulty-buttons">
          <button
            className={difficulty === 'easy' ? 'active' : ''}
            onClick={() => setDifficulty('easy')}
          >
            Easy
          </button>
          <button
            className={difficulty === 'medium' ? 'active' : ''}
            onClick={() => setDifficulty('medium')}
          >
            Medium
          </button>
          <button
            className={difficulty === 'hard' ? 'active' : ''}
            onClick={() => setDifficulty('hard')}
          >
            Hard
          </button>
        </div>
      </div>

      <div className="topics-grid">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="topic-card"
            onClick={() => onSelectTopic({ ...topic, selectedDifficulty: difficulty })}
          >
            <div className="topic-icon">{topic.icon}</div>
            <h3>{topic.name}</h3>
            <p>{topic.description}</p>
            <span className="difficulty-badge">{topic.difficulty}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopicSelector
