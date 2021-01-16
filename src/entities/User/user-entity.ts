import { Email } from './email'
import { Name } from './name'
import { Password } from './password'
import { IUserData } from './user-data'

export class UserEntity {
  public readonly id: string
  public readonly name: Name
  public readonly email: Email
  public readonly password: Password

  private constructor(props: Omit<UserEntity, 'id'>, id: string) {
    this.id = id
    this.email = props.email
    this.name = props.name
    this.password = props.password
  }

  static createUser(userData: IUserData): UserEntity {
    const email = Email.create(userData.email)
    const password = Password.create(userData.password)
    const name = Name.create(userData.name)

    return new UserEntity({ email, password, name }, '200')
  }
}
