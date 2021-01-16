class Password {
  private readonly _password: string

  private constructor(password: string) {
    this._password = password
  }

  static create(password: string): Password {
    return new Password(password)
  }

  get value(): string {
    return this._password
  }
}

export { Password }
