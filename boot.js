const express = require('express')
require('dotenv').config()
const Server = require('./server')
const PixabayService = require('./pixabayService')
const GiphyService = require('./giphyService')
const port = 5000
const cors = require('cors')
async function main() {
  const app = express()
  app.use(cors())
  const giphyService = new GiphyService()
  const pixabayService = new PixabayService()
  const server = new Server(app, giphyService, pixabayService)
  await server.run(port)
}

main()
