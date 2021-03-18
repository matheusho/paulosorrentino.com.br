import { useEffect, useState } from 'react'
import data from 'data/phrases.json'

const { PHRASES_INTERVAL = 7000 } = process.env

const buildPhrase = ({ phrase }) => `"${phrase}"`

export default function usePhrases() {
  const [phrase, setPhrase] = useState('')

  useEffect(() => {
    const getPhrase = () => {
      const index = Math.floor(Math.random() * data.length)
      const phrase = data[index]

      setPhrase(buildPhrase(phrase))
    }

    getPhrase()
    setInterval(() => getPhrase(), Number(PHRASES_INTERVAL))
  }, [])

  return phrase
}
