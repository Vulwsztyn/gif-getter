class Server {
  constructor(app) {
    this.app = app
    this.giphyService = giphyService
    this.pixabayService = pixabayService
    this.app.get('/api/hello', (req, res) => {
      res.send('Hello World!')
    })
    this.app.get('/api/query/:q', async (req, res) => {
      const { q } = req.params
      const giphyResponse = await giphyService.get(q)
      const pixabayResponse = await pixabayService.get(q)
      console.log(giphyResponse)
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
