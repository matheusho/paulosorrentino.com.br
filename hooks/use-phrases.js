import { useEffect, useState } from 'react'

const { INTERVAL = 10000 } = process.env

const buildPhrase = ({ phrase }) => {
  if (!phrase) {
    return ''
  }

  return `"${phrase}"`
}

export default function usePhrases() {
  const [phrase, setPhrase] = useState('')
  const [hasInterval, setHasInterval] = useState(false);

  const fetchPhrase = () => {
    fetch('/api/phrases')
      .then((res) => res.json())
      .then(buildPhrase)
      .then(setPhrase)
  }

  useEffect(() => {
    fetchPhrase()
  }, [])

  useEffect(() => {
    if (!hasInterval) {
      setHasInterval(true)
      setInterval(() => fetchPhrase(), INTERVAL)
    }
  }, [phrase])

  return [phrase, fetchPhrase]
}
