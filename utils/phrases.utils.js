import data from 'data/phrases.json'

export const getPhrase = () => {
  const index = Math.floor(Math.random() * data.length)

  return data[index]
}
