const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getRandomDecimal = (min, max, decimals = 2) => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(decimals))
}

const generators = {
  arithmetic: (difficulty) => {
    const ranges = {
      easy: { min: 1, max: 20 },
      medium: { min: 10, max: 100 },
      hard: { min: 50, max: 500 }
    }
    const range = ranges[difficulty]

    const operations = [
      {
        type: 'add',
        generate: () => {
          const a = getRandomInt(range.min, range.max)
          const b = getRandomInt(range.min, range.max)
          return {
            question: `What is ${a} + ${b}?`,
            answer: a + b,
            hint: `Try breaking it down: ${a} + ${b}`,
            explanation: `${a} + ${b} = ${a + b}`
          }
        }
      },
      {
        type: 'subtract',
        generate: () => {
          const a = getRandomInt(range.min, range.max)
          const b = getRandomInt(range.min, a)
          return {
            question: `What is ${a} - ${b}?`,
            answer: a - b,
            hint: `Count backwards from ${a}`,
            explanation: `${a} - ${b} = ${a - b}`
          }
        }
      },
      {
        type: 'multiply',
        generate: () => {
          const a = getRandomInt(range.min, Math.min(range.max, 20))
          const b = getRandomInt(range.min, Math.min(range.max, 20))
          return {
            question: `What is ${a} × ${b}?`,
            answer: a * b,
            hint: `Think of it as ${a} groups of ${b}`,
            explanation: `${a} × ${b} = ${a * b}`
          }
        }
      },
      {
        type: 'divide',
        generate: () => {
          const b = getRandomInt(2, 12)
          const answer = getRandomInt(range.min, Math.floor(range.max / b))
          const a = b * answer
          return {
            question: `What is ${a} ÷ ${b}?`,
            answer: answer,
            hint: `How many times does ${b} go into ${a}?`,
            explanation: `${a} ÷ ${b} = ${answer}`
          }
        }
      }
    ]

    const operation = operations[getRandomInt(0, operations.length - 1)]
    return operation.generate()
  },

  fractions: (difficulty) => {
    const ranges = {
      easy: { max: 10 },
      medium: { max: 20 },
      hard: { max: 50 }
    }
    const range = ranges[difficulty]

    const types = [
      {
        type: 'add-fractions',
        generate: () => {
          const denom = getRandomInt(2, range.max)
          const num1 = getRandomInt(1, denom - 1)
          const num2 = getRandomInt(1, denom - 1)
          const answer = parseFloat(((num1 + num2) / denom).toFixed(2))
          return {
            question: `What is ${num1}/${denom} + ${num2}/${denom}? (Answer as a decimal)`,
            answer: answer,
            hint: `Add the numerators: ${num1} + ${num2}, then divide by ${denom}`,
            explanation: `${num1}/${denom} + ${num2}/${denom} = ${num1 + num2}/${denom} = ${answer}`
          }
        }
      },
      {
        type: 'fraction-to-decimal',
        generate: () => {
          const denom = [2, 4, 5, 8, 10, 20][getRandomInt(0, 5)]
          const num = getRandomInt(1, denom - 1)
          const answer = parseFloat((num / denom).toFixed(2))
          return {
            question: `Convert ${num}/${denom} to a decimal`,
            answer: answer,
            hint: `Divide ${num} by ${denom}`,
            explanation: `${num} ÷ ${denom} = ${answer}`
          }
        }
      },
      {
        type: 'percentage',
        generate: () => {
          const percent = getRandomInt(10, 90)
          const total = getRandomInt(20, 200)
          const answer = parseFloat(((percent / 100) * total).toFixed(2))
          return {
            question: `What is ${percent}% of ${total}?`,
            answer: answer,
            hint: `Convert ${percent}% to decimal (${percent / 100}) and multiply by ${total}`,
            explanation: `${percent}% × ${total} = ${percent / 100} × ${total} = ${answer}`
          }
        }
      }
    ]

    const type = types[getRandomInt(0, types.length - 1)]
    return type.generate()
  },

  algebra: (difficulty) => {
    const ranges = {
      easy: { min: 1, max: 20 },
      medium: { min: 10, max: 50 },
      hard: { min: 20, max: 100 }
    }
    const range = ranges[difficulty]

    const types = [
      {
        type: 'solve-x',
        generate: () => {
          const x = getRandomInt(range.min, range.max)
          const coefficient = getRandomInt(2, 10)
          const result = coefficient * x
          return {
            question: `Solve for x: ${coefficient}x = ${result}`,
            answer: x,
            hint: `Divide both sides by ${coefficient}`,
            explanation: `${coefficient}x = ${result}, so x = ${result} ÷ ${coefficient} = ${x}`
          }
        }
      },
      {
        type: 'solve-addition',
        generate: () => {
          const x = getRandomInt(range.min, range.max)
          const addend = getRandomInt(range.min, range.max)
          const result = x + addend
          return {
            question: `Solve for x: x + ${addend} = ${result}`,
            answer: x,
            hint: `Subtract ${addend} from both sides`,
            explanation: `x + ${addend} = ${result}, so x = ${result} - ${addend} = ${x}`
          }
        }
      },
      {
        type: 'evaluate',
        generate: () => {
          const x = getRandomInt(range.min, 20)
          const a = getRandomInt(2, 10)
          const b = getRandomInt(1, 20)
          const answer = a * x + b
          return {
            question: `If x = ${x}, what is ${a}x + ${b}?`,
            answer: answer,
            hint: `First multiply ${a} × ${x}, then add ${b}`,
            explanation: `${a} × ${x} + ${b} = ${a * x} + ${b} = ${answer}`
          }
        }
      }
    ]

    const type = types[getRandomInt(0, types.length - 1)]
    return type.generate()
  },

  geometry: (difficulty) => {
    const ranges = {
      easy: { min: 2, max: 15 },
      medium: { min: 5, max: 30 },
      hard: { min: 10, max: 50 }
    }
    const range = ranges[difficulty]

    const types = [
      {
        type: 'rectangle-area',
        generate: () => {
          const length = getRandomInt(range.min, range.max)
          const width = getRandomInt(range.min, range.max)
          const answer = length * width
          return {
            question: `What is the area of a rectangle with length ${length} and width ${width}?`,
            answer: answer,
            hint: `Area = length × width`,
            explanation: `Area = ${length} × ${width} = ${answer} square units`
          }
        }
      },
      {
        type: 'rectangle-perimeter',
        generate: () => {
          const length = getRandomInt(range.min, range.max)
          const width = getRandomInt(range.min, range.max)
          const answer = 2 * (length + width)
          return {
            question: `What is the perimeter of a rectangle with length ${length} and width ${width}?`,
            answer: answer,
            hint: `Perimeter = 2 × (length + width)`,
            explanation: `Perimeter = 2 × (${length} + ${width}) = 2 × ${length + width} = ${answer} units`
          }
        }
      },
      {
        type: 'triangle-area',
        generate: () => {
          const base = getRandomInt(range.min, range.max)
          const height = getRandomInt(range.min, range.max)
          const answer = parseFloat(((base * height) / 2).toFixed(2))
          return {
            question: `What is the area of a triangle with base ${base} and height ${height}?`,
            answer: answer,
            hint: `Area = (base × height) ÷ 2`,
            explanation: `Area = (${base} × ${height}) ÷ 2 = ${base * height} ÷ 2 = ${answer} square units`
          }
        }
      },
      {
        type: 'circle-area',
        generate: () => {
          const radius = getRandomInt(range.min, Math.min(range.max, 15))
          const answer = parseFloat((Math.PI * radius * radius).toFixed(2))
          return {
            question: `What is the area of a circle with radius ${radius}? (Use π ≈ 3.14)`,
            answer: answer,
            hint: `Area = π × radius²`,
            explanation: `Area = π × ${radius}² = 3.14 × ${radius * radius} = ${answer} square units`
          }
        }
      }
    ]

    const type = types[getRandomInt(0, types.length - 1)]
    return type.generate()
  },

  'word-problems': (difficulty) => {
    const ranges = {
      easy: { min: 5, max: 50 },
      medium: { min: 20, max: 200 },
      hard: { min: 50, max: 500 }
    }
    const range = ranges[difficulty]

    const problems = [
      {
        generate: () => {
          const apples = getRandomInt(range.min, range.max)
          const oranges = getRandomInt(range.min, range.max)
          const answer = apples + oranges
          return {
            question: `Sarah has ${apples} apples and ${oranges} oranges. How many fruits does she have in total?`,
            answer: answer,
            hint: `Add the apples and oranges together`,
            explanation: `Total fruits = ${apples} + ${oranges} = ${answer}`
          }
        }
      },
      {
        generate: () => {
          const total = getRandomInt(range.min * 2, range.max)
          const spent = getRandomInt(range.min, total - 1)
          const answer = total - spent
          return {
            question: `John had $${total}. He spent $${spent} on lunch. How much money does he have left?`,
            answer: answer,
            hint: `Subtract the amount spent from the total`,
            explanation: `Money left = $${total} - $${spent} = $${answer}`
          }
        }
      },
      {
        generate: () => {
          const boxes = getRandomInt(3, 20)
          const itemsPerBox = getRandomInt(5, 30)
          const answer = boxes * itemsPerBox
          return {
            question: `A store has ${boxes} boxes of pencils. Each box contains ${itemsPerBox} pencils. How many pencils are there in total?`,
            answer: answer,
            hint: `Multiply the number of boxes by pencils per box`,
            explanation: `Total pencils = ${boxes} × ${itemsPerBox} = ${answer}`
          }
        }
      },
      {
        generate: () => {
          const students = getRandomInt(20, 40)
          const groups = getRandomInt(2, 8)
          const answer = parseFloat((students / groups).toFixed(2))
          return {
            question: `A teacher needs to divide ${students} students into ${groups} equal groups. How many students will be in each group?`,
            answer: answer,
            hint: `Divide the total students by the number of groups`,
            explanation: `Students per group = ${students} ÷ ${groups} = ${answer}`
          }
        }
      }
    ]

    const problem = problems[getRandomInt(0, problems.length - 1)]
    return problem.generate()
  },

  mixed: (difficulty) => {
    const allTopics = ['arithmetic', 'fractions', 'algebra', 'geometry', 'word-problems']
    const randomTopic = allTopics[getRandomInt(0, allTopics.length - 1)]
    return generators[randomTopic](difficulty)
  }
}

export const generateQuestions = (topic) => {
  const numQuestions = 10
  const questions = []

  for (let i = 0; i < numQuestions; i++) {
    questions.push(generators[topic.id](topic.selectedDifficulty))
  }

  return questions
}
