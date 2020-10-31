class Server {
  constructor(app) {
    this.app = app
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
