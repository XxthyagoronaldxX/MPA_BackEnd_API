import { validateEmail } from './validators'

class Email {
  private readonly _email: string

  private constructor(email: string) {
    this._email = email
    Object.freeze(this)
  }

  static create(email: string): Email {
    if (validateEmail(email)) throw new Error('')

    return new Email(email)
  }

  get value(): string {
    return this._email
  }
}

export { Email }
