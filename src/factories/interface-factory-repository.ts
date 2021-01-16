import { IUserRepository } from '../repositories/interface-user-repository'

interface IFactoryRepository {
  createUserRepository(): IUserRepository
}

export { IFactoryRepository }
