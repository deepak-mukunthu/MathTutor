# 🧮 Math Tutor

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge&logo=github)](https://deepak-mukunthu.github.io/MathTutor/)
[![GitHub](https://img.shields.io/badge/GitHub-MathTutor-blue?style=for-the-badge&logo=github)](https://github.com/deepak-mukunthu/MathTutor)
[![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](LICENSE)

An interactive math tutor and quiz master designed to help middle school students learn and master mathematics through engaging practice sessions.

## 🚀 [Try the Live Demo →](https://deepak-mukunthu.github.io/MathTutor/)

**No installation required** - click the link above to start learning math right away!

### 📺 See It In Action
- 🎬 **[Visual Demo Walkthrough →](demos/VISUAL_DEMO.md)** - Step-by-step screenshots showing the complete learning flow
- 📸 **[Feature Screenshots →](demos/DEMO.md)** - Detailed look at key features with explanations

> **Want to create a video demo?** See [CREATE_DEMO_VIDEO.md](CREATE_DEMO_VIDEO.md) for recording instructions

## Features

- **Multiple Topics**: Covers all middle school math topics
  - Basic Arithmetic (addition, subtraction, multiplication, division)
  - Fractions & Decimals (conversions, percentages)
  - Pre-Algebra (variables, equations, expressions)
  - Geometry (area, perimeter, shapes)
  - Word Problems (real-world applications)
  - Mixed Review (all topics combined)

- **Adaptive Difficulty**: Choose from Easy, Medium, or Hard difficulty levels

- **Smart Learning System**:
  - 10 questions per quiz session
  - Multiple attempts (up to 3) per question
  - Progressive hints that activate after wrong answers
  - Coaching feedback that adapts to student performance
  - Detailed explanations when answers are revealed

- **Coaching Personality**:
  - Polite yet assertive guidance
  - Encourages persistence and learning from mistakes
  - Celebrates successes based on attempt count
  - Tracks hint usage and attempts

- **Progress Tracking**: 
  - Visual progress bar during quizzes
  - Detailed performance metrics (first-try correct, hints used, attempts)
  - Comprehensive results review with explanations

- **Beautiful UI**: Modern gradient design with smooth animations

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/deepak-mukunthu/MathTutor.git
cd MathTutor
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## How to Use

1. **Choose a Topic**: Select from the available math topics on the home screen
2. **Select Difficulty**: Choose Easy, Medium, or Hard based on your skill level
3. **Answer Questions**: Type your answer and submit
4. **Get Hints**: Click "Show Hint" if you need help
5. **Review Results**: After completing the quiz, review your answers and learn from explanations
6. **Practice Again**: Retry the same topic or choose a new one

## Project Structure

```
MathTutor/
├── src/
│   ├── components/
│   │   ├── TopicSelector.jsx    # Topic selection screen
│   │   ├── Quiz.jsx              # Quiz interface
│   │   └── Results.jsx           # Results and review
│   ├── utils/
│   │   └── questionGenerator.js  # Question generation logic
│   ├── App.jsx                   # Main application component
│   ├── main.jsx                  # Application entry point
│   └── index.css                 # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Technologies Used

- **React**: UI framework
- **Vite**: Build tool and development server
- **Vanilla CSS**: Styling with modern CSS features

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## License

MIT License - feel free to use this project for educational purposes.

## Author

Deepak Mukunthu

## Acknowledgments

Built to help students develop strong math fundamentals through interactive practice.
