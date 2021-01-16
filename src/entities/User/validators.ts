function validateEmail(email: string): boolean {
  if (email == undefined) return false

  if (email.indexOf('@') == -1) return false

  return true
}

function validateName(name: string): boolean {
  if (name == undefined) return false

  return true
}

function validatePassword(password: string): boolean {
  if (password == undefined) return false

  if (password.length < 8) return false

  return true
}

export { validateEmail, validateName, validatePassword }
