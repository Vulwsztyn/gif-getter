const express = require('express')

const Server = require('./server')

const port = 3000

async function main() {
  const app = express()
  const server = new Server(app)
  await server.run(port)
}

main()
