import './Results.css'

function Results({ results, onRestart, onRetry }) {
  const percentage = Math.round((results.score / results.total) * 100)
  const hintsUsed = results.answers.filter(a => a.hintUsed).length
  const firstTryCorrect = results.answers.filter(a => a.isCorrect && a.attempts === 1).length
  const gaveUp = results.answers.filter(a => a.gaveUp).length

  let message, emoji, detailMessage
  if (percentage === 100) {
    message = "Perfect score! That's what I'm talking about!"
    emoji = "🏆"
    detailMessage = "You crushed it! But don't get comfortable - keep challenging yourself with harder topics."
  } else if (percentage >= 90) {
    message = "Outstanding work! You're really getting this."
    emoji = "🌟"
    detailMessage = "Just a couple of small mistakes. Review those problems and you'll be unstoppable."
  } else if (percentage >= 70) {
    message = "Good job! You're on the right track."
    emoji = "👍"
    detailMessage = "You got most of them right. Now let's work on those tricky ones you missed."
  } else if (percentage >= 50) {
    message = "You're making progress, but we've got work to do."
    emoji = "💪"
    detailMessage = "Don't feel bad - this is how learning works. Study the explanations carefully and try again. You WILL improve."
  } else {
    message = "This is tough, but giving up isn't an option."
    emoji = "📚"
    detailMessage = "Take your time with each explanation below. Learn from these mistakes, then try again. I believe you can do better."
  }

  return (
    <div className="results">
      <div className="results-header">
        <div className="emoji">{emoji}</div>
        <h2>Quiz Complete!</h2>
        <p className="main-message">{message}</p>
        <p className="detail-message">{detailMessage}</p>
        <div className="performance-stats">
          {firstTryCorrect > 0 && (
            <div className="stat-badge success">
              <strong>{firstTryCorrect}</strong> correct on first try
            </div>
          )}
          {hintsUsed > 0 && (
            <div className="stat-badge warning">
              <strong>{hintsUsed}</strong> hint{hintsUsed > 1 ? 's' : ''} used
            </div>
          )}
          {gaveUp > 0 && (
            <div className="stat-badge danger">
              <strong>{gaveUp}</strong> gave up on
            </div>
          )}
        </div>
      </div>

      <div className="score-card">
        <div className="score-circle">
          <svg viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#e0e0e0"
              strokeWidth="10"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#667eea"
              strokeWidth="10"
              strokeDasharray={`${percentage * 2.827} 282.7`}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="score-text">
            <span className="score">{percentage}%</span>
            <span className="score-detail">{results.score}/{results.total}</span>
          </div>
        </div>
      </div>

      <div className="answers-review">
        <h3>Let's Review What You Learned</h3>
        <p className="review-intro">
          {percentage >= 70
            ? "Here's what we covered. Make sure you understand even the ones you got right!"
            : "Pay close attention to each problem. Understanding these will make you stronger."}
        </p>
        {results.answers.map((answer, index) => (
          <div key={index} className={`answer-item ${answer.isCorrect ? 'correct' : 'incorrect'}`}>
            <div className="answer-header">
              <span className="question-num">Q{index + 1}</span>
              <div className="answer-badges">
                <span className="result-icon">{answer.isCorrect ? '✓' : '✗'}</span>
                {answer.attempts && (
                  <span className="attempt-badge">{answer.attempts} {answer.attempts === 1 ? 'try' : 'tries'}</span>
                )}
                {answer.hintUsed && <span className="hint-badge">hint</span>}
                {answer.gaveUp && <span className="gave-up-badge">gave up</span>}
              </div>
            </div>
            <p className="answer-question">{answer.question}</p>
            <div className="answer-details">
              <p>Your answer: <strong className={answer.isCorrect ? 'correct-answer' : 'wrong-answer'}>{answer.userAnswer}</strong></p>
              {!answer.isCorrect && (
                <>
                  <p>Correct answer: <strong className="correct-answer">{answer.correctAnswer}</strong></p>
                  <div className="explanation-box">
                    <strong>📖 Explanation:</strong>
                    <p>{answer.explanation}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="results-actions">
        <button onClick={onRetry} className="retry-btn">
          {percentage >= 90 ? "Challenge Yourself Again" : "Try Again - You'll Do Better"}
        </button>
        <button onClick={onRestart} className="home-btn">
          {percentage >= 70 ? "Pick a New Challenge" : "Choose Another Topic"}
        </button>
      </div>
      <div className="coach-final-message">
        <span className="coach-icon">👨‍🏫</span>
        <p>
          {percentage >= 90
            ? "Remember: real mastery comes from consistent practice. Don't just stick to what's easy!"
            : "Every expert was once a beginner. The difference? They didn't quit. See you in the next quiz!"}
        </p>
      </div>
    </div>
  )
}

export default Results
