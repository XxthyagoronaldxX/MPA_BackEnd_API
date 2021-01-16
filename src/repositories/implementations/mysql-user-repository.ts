import { UserEntity } from '../../entities/User/user-entity'
import { IUserRepository } from '../interface-user-repository'

class MysqlUserRepository implements IUserRepository {
  save(data: UserEntity): Promise<void> {
    throw new Error(data.name.value)
  }
}

export { MysqlUserRepository }
