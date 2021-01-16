import { UserEntity } from '../entities/User/user-entity'

interface IUserRepository {
  save(data: UserEntity): Promise<void>
}

export { IUserRepository }
