import { FactoryRepository } from '../../factories/implementations/factory-repository'
import { CreateUserController } from './create-user-controller'
import { CreateUserUseCase } from './create-user-usecase'

const mysqlUserRepository = new FactoryRepository().createUserRepository()

const createUserUseCase = new CreateUserUseCase(mysqlUserRepository)
const createuserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createuserController }
