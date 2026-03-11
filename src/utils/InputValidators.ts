export interface ValidationResult {
  success: boolean
  message?: string
  [key: string]: boolean | string | undefined
}

export function nameValidation(name: string): ValidationResult {
  if (!name || name.length === 0) {
    return { success: false, message: 'Campo obrigatório' }
  }
  if (name.length < 3) {
    return { success: false, message: 'Nome muito curto' }
  }
  if (name.length > 50) {
    return { success: false, message: 'Nome muito longo' }
  }
  return { success: true }
}

export function birthDateValidation(birthDate: string): ValidationResult {
  if (!birthDate || birthDate.length === 0) {
    return { success: false, message: 'Campo obrigatório' }
  }
  if (!dateValidate(birthDate)) {
    return { success: false, message: 'Data inválida' }
  }
  return { success: true }
}

export function dateValidate(data: string): boolean {
  const [dia, mes, ano] = data.split('/')
  if (!dia || !mes || !ano) return false
  const d = new Date(`${ano}-${mes}-${dia}`)
  const hoje = new Date()
  return /^\d{2}\/\d{2}\/\d{4}$/.test(data) && !Number.isNaN(d.getTime()) && d <= hoje
}

export function emailValidation(email: string): ValidationResult {
  if (!email || email.length === 0) {
    return { success: false, message: 'Campo obrigatório' }
  }
  if (emailValidate(email)) {
    return { success: true }
  }
  return { success: false, message: 'Email inválido' }
}

export function emailValidate(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function cpfValidation(cpf: string): ValidationResult {
  const onlyDigits = cpf?.replaceAll(/\D/g, '')
  if (!cpf || onlyDigits.length === 0) {
    return { success: false, message: 'Campo obrigatório' }
  } else if (cpfValidate(onlyDigits)) {
    return { success: true }
  } else {
    return { success: false, message: 'CPF inválido' }
  }
}

export function cpfValidate(cpf: string): boolean {
  cpf = cpf.replaceAll(/[^\d]+/g, '')
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false

  let soma = 0
  for (let i = 0; i < 9; i++) soma += Number.parseInt(cpf.charAt(i)) * (10 - i)
  let resto = 11 - (soma % 11)
  if (resto === 10 || resto === 11) resto = 0
  if (resto !== Number.parseInt(cpf.charAt(9))) return false

  soma = 0
  for (let i = 0; i < 10; i++) soma += Number.parseInt(cpf.charAt(i)) * (11 - i)
  resto = 11 - (soma % 11)
  if (resto === 10 || resto === 11) resto = 0
  return resto === Number.parseInt(cpf.charAt(10))
}

export function phoneValidation(phone: string): ValidationResult {
  const onlyDigits = phone?.replaceAll(/\D/g, '')
  if (!onlyDigits || onlyDigits.length === 0) {
    return { success: false, message: 'Campo obrigatório' }
  } else if (phoneValidate(phone)) {
    return { success: true }
  } else {
    return { success: false, message: 'Celular inválido' }
  }
}

export function phoneValidate(cel: string): boolean {
  return /^\(\d{2}\) \d{5}-\d{4}$/.test(cel)
}
