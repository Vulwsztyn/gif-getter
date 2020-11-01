const express = require('express')
require('dotenv').config()
const Server = require('./server')
const PixabayService = require('./pixabayService')
const GiphyService = require('./giphyService')
const port = 3000

async function main() {
  const app = express()
  const giphyService = new GiphyService()
  const pixabayService = new PixabayService()
  const server = new Server(app, giphyService, pixabayService)
  await server.run(port)
}

main()
