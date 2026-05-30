import { useState, useEffect } from 'react'
import { generateQuestions } from '../utils/questionGenerator'
import './Quiz.css'

function Quiz({ topic, onComplete }) {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [answers, setAnswers] = useState([])
  const [feedback, setFeedback] = useState(null)
  const [showHint, setShowHint] = useState(false)
  const [hintUsed, setHintUsed] = useState(false)
  const [coachMessage, setCoachMessage] = useState('')
  const [attemptCount, setAttemptCount] = useState(0)
  const [showingAnswer, setShowingAnswer] = useState(false)
  const MAX_ATTEMPTS = 3

  useEffect(() => {
    const generatedQuestions = generateQuestions(topic)
    setQuestions(generatedQuestions)
    setCoachMessage(getWelcomeMessage())
  }, [topic])

  const getWelcomeMessage = () => {
    const messages = [
      "Alright, let's sharpen those math skills! I know you can do this.",
      "Ready to tackle some problems? Let's show what you've got!",
      "Time to put that brain to work! Remember, every mistake is a chance to learn.",
      "Let's do this together! Take your time and think it through."
    ]
    return messages[Math.floor(Math.random() * messages.length)]
  }

  const getCorrectMessage = (streak) => {
    if (streak >= 3) {
      return [
        "Excellent! You're on fire! Keep that momentum going.",
        "Look at you go! Three in a row - now that's what I call focus!",
        "Outstanding! You're really getting the hang of this."
      ]
    }
    return [
      "That's right! See? You knew how to do it.",
      "Perfect! Your hard work is paying off.",
      "Exactly! You're getting stronger with each question.",
      "Yes! That's the kind of thinking I like to see.",
      "Nailed it! Keep up that excellent work."
    ]
  }

  const getIncorrectMessage = (attempt) => {
    if (attempt === 1) {
      return [
        "Not quite. Take another look at the problem. What are you solving for?",
        "That's not it. Think about what the question is really asking.",
        "Close, but not quite right. Let me give you a hint to help you figure it out.",
        "Good try, but check your work. What step might you have missed?"
      ]
    } else if (attempt === 2) {
      return [
        "Still not there. Look at the hint carefully - it's telling you exactly what to do.",
        "You're struggling with this one. Break it down step by step.",
        "Not yet. Read the hint again and think through each part of the problem.",
        "I know this is tough, but you can get it. Use the hint to guide your thinking."
      ]
    } else {
      return [
        "Okay, you've given it a solid effort. Let me show you how to solve this one.",
        "Alright, this one's tricky. Let me walk you through it so you understand.",
        "You tried hard, and that's what matters. Now let's learn from this together.",
        "Good persistence! Now let me show you the right approach so you can use it next time."
      ]
    }
  }

  if (questions.length === 0) {
    return <div className="quiz loading">Loading questions...</div>
  }

  const currentQuestion = questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === questions.length - 1

  const handleSubmit = (e) => {
    e.preventDefault()

    const numericAnswer = parseFloat(userAnswer)
    const isCorrect = Math.abs(numericAnswer - currentQuestion.answer) < 0.01
    const newAttemptCount = attemptCount + 1

    if (isCorrect) {
      const answerRecord = {
        question: currentQuestion.question,
        userAnswer: numericAnswer,
        correctAnswer: currentQuestion.answer,
        isCorrect: true,
        explanation: currentQuestion.explanation,
        hintUsed,
        attempts: newAttemptCount
      }

      const newAnswers = [...answers, answerRecord]
      setAnswers(newAnswers)
      setFeedback('correct')

      const recentCorrect = newAnswers.slice(-3).filter(a => a.isCorrect).length
      const messages = getCorrectMessage(recentCorrect)
      const message = messages[Math.floor(Math.random() * messages.length)]
      setCoachMessage(message)

      setTimeout(() => {
        moveToNextQuestion(newAnswers)
      }, 3000)
    } else {
      setAttemptCount(newAttemptCount)
      setFeedback('incorrect')

      if (newAttemptCount >= MAX_ATTEMPTS) {
        setShowingAnswer(true)
        const answerRecord = {
          question: currentQuestion.question,
          userAnswer: numericAnswer,
          correctAnswer: currentQuestion.answer,
          isCorrect: false,
          explanation: currentQuestion.explanation,
          hintUsed,
          attempts: newAttemptCount
        }
        const newAnswers = [...answers, answerRecord]
        setAnswers(newAnswers)

        const messages = getIncorrectMessage(newAttemptCount)
        const message = messages[Math.floor(Math.random() * messages.length)]
        setCoachMessage(message)

        setTimeout(() => {
          moveToNextQuestion(newAnswers)
        }, 5000)
      } else {
        if (!showHint) setShowHint(true)
        setHintUsed(true)

        const messages = getIncorrectMessage(newAttemptCount)
        const message = messages[Math.floor(Math.random() * messages.length)]
        setCoachMessage(message)

        setTimeout(() => {
          setFeedback(null)
          setUserAnswer('')
        }, 2000)
      }
    }
  }

  const moveToNextQuestion = (newAnswers) => {
    if (isLastQuestion) {
      onComplete({
        topic: topic.name,
        answers: newAnswers,
        score: newAnswers.filter(a => a.isCorrect).length,
        total: questions.length
      })
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setUserAnswer('')
      setFeedback(null)
      setShowHint(false)
      setHintUsed(false)
      setAttemptCount(0)
      setShowingAnswer(false)
    }
  }

  const handleShowAnswer = () => {
    setShowingAnswer(true)
    const answerRecord = {
      question: currentQuestion.question,
      userAnswer: parseFloat(userAnswer) || 0,
      correctAnswer: currentQuestion.answer,
      isCorrect: false,
      explanation: currentQuestion.explanation,
      hintUsed,
      attempts: attemptCount,
      gaveUp: true
    }
    const newAnswers = [...answers, answerRecord]
    setAnswers(newAnswers)
    setFeedback('gave-up')
    setCoachMessage("I understand it's frustrating, but giving up too early won't help you improve. Next time, try all your attempts before asking for the answer.")

    setTimeout(() => {
      moveToNextQuestion(newAnswers)
    }, 5000)
  }

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  return (
    <div className="quiz">
      <div className="quiz-header">
        <h2>{topic.name}</h2>
        <div className="coach-message">
          <span className="coach-icon">👨‍🏫</span>
          <p>{coachMessage}</p>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="question-counter">
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>
      </div>

      <div className={`question-card ${feedback ? feedback : ''}`}>
        <p className="question-text">{currentQuestion.question}</p>

        {feedback === null ? (
          <>
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                step="any"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Type your answer here"
                autoFocus
                required
              />
              <div className="attempt-tracker">
                Attempt {attemptCount + 1} of {MAX_ATTEMPTS}
              </div>
              <div className="button-group">
                <button type="submit" className="submit-btn">
                  {attemptCount === 0 ? 'Submit Answer' : 'Try Again'}
                </button>
                <button
                  type="button"
                  className="hint-btn"
                  onClick={() => {
                    if (!showHint) setHintUsed(true)
                    setShowHint(!showHint)
                  }}
                >
                  {showHint ? 'Hide' : 'Need a'} Hint
                </button>
                {attemptCount >= 2 && (
                  <button
                    type="button"
                    className="show-answer-btn"
                    onClick={handleShowAnswer}
                  >
                    Show Answer
                  </button>
                )}
              </div>
            </form>
            {showHint && (
              <div className="hint">
                <strong>💡 Here's a hint:</strong> {currentQuestion.hint}
                <p className="hint-encouragement">Think it through and try again!</p>
              </div>
            )}
          </>
        ) : feedback === 'correct' ? (
          <div className="feedback">
            <div className="correct-feedback">
              <span className="feedback-icon">✓</span>
              <p className="feedback-title">That's correct!</p>
              {attemptCount > 1 && (
                <p className="feedback-note">It took you {attemptCount} tries, but you figured it out! That's what learning looks like.</p>
              )}
              {attemptCount === 1 && hintUsed && (
                <p className="feedback-note">You used the hint and got it - smart thinking!</p>
              )}
              {attemptCount === 1 && !hintUsed && (
                <p className="feedback-note">First try and no hints - excellent work!</p>
              )}
            </div>
          </div>
        ) : feedback === 'gave-up' || showingAnswer ? (
          <div className="feedback">
            <div className="gave-up-feedback">
              <span className="feedback-icon">📖</span>
              <p className="feedback-title">The correct answer is {currentQuestion.answer}</p>
              <p className="explanation">
                <strong>Here's how to solve it:</strong> {currentQuestion.explanation}
              </p>
              <p className="learning-note">
                {feedback === 'gave-up'
                  ? "Don't give up so quickly next time. Struggling is part of learning!"
                  : "You gave it a good effort. Study this explanation and you'll do better on similar problems."}
              </p>
            </div>
          </div>
        ) : (
          <div className="feedback">
            <div className="try-again-feedback">
              <span className="feedback-icon">🤔</span>
              <p className="feedback-title">Not quite - try again!</p>
              {!showHint && (
                <p className="feedback-note">Click "Need a Hint" if you're stuck, then give it another shot.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Quiz
