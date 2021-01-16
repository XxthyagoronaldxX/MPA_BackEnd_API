import { UserEntity } from '../../entities/User/user-entity'
import { IUserRepository } from '../../repositories/interface-user-repository'
import { ICreateUserRequestDTO } from './create-user-dto'

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: ICreateUserRequestDTO): Promise<void> {
    const user = UserEntity.createUser(data)

    await this.userRepository.save(user)
  }
}

export { CreateUserUseCase }
