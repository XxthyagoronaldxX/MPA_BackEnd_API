import { Request, Response } from 'express'

import { CreateUserUseCase } from './create-user-usecase'

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, name, email, password } = request.body

    try {
      await this.createUserUseCase.execute({ id, name, email, password })

      return response.status(200).send()
    } catch (err) {
      return response.status(500).send(err.message || 'Unexpected error!')
    }
  }
}

export { CreateUserController }
