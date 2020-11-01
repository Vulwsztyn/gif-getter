const axios = require('axios')
const R = require('ramda')

const { Either, left, either } = require('./either')

class PixabayService {
  async get(q) {
    const response = () =>
      axios
        .get('https://pixabay.com/api/', {
          params: { key: process.env.PIXABAY_API_KEY, q },
        })
        .then((e) => Either.of(e))
        .catch((_) => left([]))
    return (await response()).map(
      R.pipe(
        R.pathOr([], ['data', 'hits']),
        R.map((e) => ({ image: e.webformatURL }))
      )
    ).$value
  }
}
module.exports = PixabayService
