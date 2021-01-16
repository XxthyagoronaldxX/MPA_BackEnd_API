import http from 'http'

import { app } from './app'

const server = new http.Server(app)
const hostname = `localhost`
const port = 3000

server.listen(port, hostname, () => {
  console.log(`Server is running in http://${hostname}:${port}`)
})

export { server }
