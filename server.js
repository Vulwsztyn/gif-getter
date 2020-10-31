class Server {
  constructor(app, giphyService, pixabayService) {
    this.app = app
    this.giphyService = giphyService
    this.pixabayService = pixabayService
    this.app.get('/', (req, res) => {
      res.send('Hello World!')
    })
  }
  async run(port) {
    this.app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    })
  }
}
module.exports = Server
