import { useEffect, useState } from 'react'
import data from 'data/phrases.json'

const { PHRASES_INTERVAL = 10000 } = process.env

const buildPhrase = (phrase) => `"${phrase}"`

export default function usePhrases() {
  const [phrase, setPhrase] = useState('')
  const [hasInterval, setHasInterval] = useState(false);

  const getPhrase = () => {
    const index = Math.floor(Math.random() * data.length)
    const phrase = data[index]

    setPhrase(buildPhrase(phrase))
  }

  useEffect(() => {
    getPhrase()
  }, [])

  useEffect(() => {
    if (!hasInterval) {
      setHasInterval(true);
      setInterval(() => getPhrase(), Number(PHRASES_INTERVAL))
    }
  }, [phrase])

  return phrase
}
