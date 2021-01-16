import { Request, Response, Router } from 'express'

import { createuserController } from './useCases/createUser'

const routes = Router()

routes.get('/createUser', (request: Request, response: Response) =>
  createuserController.handle(request, response)
)

export { routes }
