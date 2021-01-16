import { MysqlUserRepository } from '../../repositories/implementations/mysql-user-repository'
import { IUserRepository } from '../../repositories/interface-user-repository'
import { IFactoryRepository } from '../interface-factory-repository'

class FactoryRepository implements IFactoryRepository {
  createUserRepository(): IUserRepository {
    return new MysqlUserRepository()
  }
}

export { FactoryRepository }
