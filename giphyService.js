const axios = require('axios')
const R = require('ramda')

const { Either, left, either } = require('./either')

class GiphyService {
  async get(q) {
    const response = () =>
      axios
        .get('https://api.giphy.com/v1/gifs/search', {
          params: {
            api_key: process.env.GIPHY_API_KEY,
            q,
          },
        })
        .then((e) => Either.of(e))
        .catch((_) => left([]))
    return (await response()).map(
      R.pipe(
        R.pathOr([], ['data', 'data']),
        R.map((e) => ({
          image: R.pathOr(undefined, ['images', 'downsized_medium', 'url'], e),
        }))
      )
    ).$value
  }
}
module.exports = GiphyService
