const express = require('express')
const path = require('path')

const buildDirectory = '/frontend/build'
class Server {
  constructor(app, giphyService, pixabayService) {
    this.app = app
    this.giphyService = giphyService
    this.pixabayService = pixabayService
    app.use(express.static(path.join(__dirname, buildDirectory)))
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname + `${buildDirectory}/index.html`))
    })
    this.app.get('/api/hello', (req, res) => {
      res.send('Hello World!')
    })
    this.app.get('/api/query/:q', async (req, res) => {
      const { q } = req.params
      const giphyResponse = await this.giphyService.get(q)
      const pixabayResponse = await this.pixabayService.get(q)
      res.send({ images: [...giphyResponse, ...pixabayResponse] })
    })
  }
  async run(port) {
    this.app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    })
  }
}
module.exports = Server
