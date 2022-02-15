import { useEffect, useState } from 'react'

type ScrambledSegmentData = { text?: string, strong?: boolean, component?: JSX.Element }

const scrambleCharacters = ['!', '?', '|', '/', '(', ')', '#', '±', '~', '^', '•', '$', '§']

const ScrambledText = ({ segments, order = 0 }: { segments: ScrambledSegmentData[], order?: number }) => {
  const [rawText] = useState(segments.map((seg) => seg.text).join(''))
  const [scrambledText, setScrambledText] = useState(getScrambledCharacters(rawText))
  const [revealedCharactersCount, setRevealedCharactersCount] = useState(0)
  const [segmentPositions] = useState(getSegmentPositions(segments))

  useEffect(() => {
    const unscramble = async () => {
      const frameIncrement = 0.005
      const frameDuration = 2
      const textLength = rawText.length
      let t = 0
      await sleep(500 * order + 300)
      while (t < 1) {
        t += frameIncrement
        if ((t * 100) % (12 * frameIncrement * 100) < 0.001) {
          setScrambledText(getScrambledCharacters(rawText, t))
        }
        const t2 = 1 - Math.pow(1 - t, 4)
        setRevealedCharactersCount(Math.floor(t2 * textLength))
        await sleep(frameDuration)
      }
      setScrambledText(getScrambledCharacters(rawText, 1))
    }

    unscramble()
  }, [])

  const displayedText = scrambledText
    .slice(0, revealedCharactersCount)
    .join('')
    .padEnd(rawText.length, ' ')

  return (
    <>
      {/* raw text for screen readers */}
      <span className="hidden" style={{ pointerEvents: 'none' }}>
        {rawText}
      </span>

      {/* visible text, hidden from screen readers */}
      <span aria-hidden style={{ whiteSpace: 'pre-wrap' }}>
        {segmentPositions.map((positions, index) => (
          <ScrambledSegment
            key={index}
            data={{
              ...segments[index],
              text: displayedText.slice(positions.start, positions.end)
            }}
          />))
        }
      </span>
    </>
  )
}

const ScrambledSegment = ({ data }: { data: ScrambledSegmentData }) => {
  const { text, strong, component } = data

  if (component) return component
  if (!text) return null

  const Element = strong ? 'strong' : 'span'

  return (
    <Element>{text}</Element>
  )
}

function getScrambledCharacters(text: string, t: number = 0) {
  return text.split('').map((char, index) => {
    if (char === ' ') return char
    const charPosition = (index + 1) / text.length
    const t2 = t ** 2
    if (charPosition <= t2 || Math.random() < t2) {
      return char
    }
    return getRandomArrayItem(scrambleCharacters)
  })
}

function getSegmentPositions(segments: ScrambledSegmentData[]) {
  let currentPosition = 0
  let positions = [] as Array<{ start: number, end: number }>
  for (const segment of segments) {
    const length = segment.text?.length ?? 0
    positions.push({ start: currentPosition, end: currentPosition + length })
    currentPosition += length
  }
  return positions
}

function getRandomArrayItem(array: any[]) {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

async function sleep(duration: number) {
  await new Promise(resolve => setTimeout(resolve, duration))
}

export default ScrambledText