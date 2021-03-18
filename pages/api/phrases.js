import { getPhrase } from 'utils/phrases.utils'

export default (req, res) => {
  const phrase = getPhrase()

  res.status(200).json(phrase)
}
