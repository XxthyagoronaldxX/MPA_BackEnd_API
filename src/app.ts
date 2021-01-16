import bodyparser from 'body-parser'
import express from 'express'

import { routes } from './routes'

export class AppController {
  app: express.Application

  constructor() {
    this.app = express()

    this._middlewares()
    this._routes()
  }

  _middlewares(): void {
    this.app.use(bodyparser.json())
    this.app.use(bodyparser.urlencoded({ extended: false }))
  }

  _routes(): void {
    this.app.use(routes)
  }
}

const app = new AppController().app

export { app }
