class Name {
  private readonly _name: string

  constructor(name: string) {
    this._name = name
  }

  static create(name: string): Name {
    return new Name(name)
  }

  get value(): string {
    return this._name
  }
}

export { Name }
