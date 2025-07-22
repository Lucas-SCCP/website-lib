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
  } else if (!dateValidate(birthDate)) {
    return { success: false, message: 'Data inválida' }
  } else {
    return { success: true }
  }
}

export function dateValidate(data: string): boolean {
  const [dia, mes, ano] = data.split('/')
  if (!dia || !mes || !ano) return false
  const d = new Date(`${ano}-${mes}-${dia}`)
  const hoje = new Date()
  return (
    /^\d{2}\/\d{2}\/\d{4}$/.test(data) &&
    !isNaN(d.getTime()) &&
    d <= hoje
  )
}

export function emailValidation(email: string): ValidationResult {
  if (!email || email.length === 0) {
    return { success: false, message: 'Campo obrigatório' }
  } else if (!emailValidate(email)) {
    return { success: false, message: 'Email inválido' }
  } else {
    return { success: true }
  }
}

export function emailValidate(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function cpfValidation(cpf: string): ValidationResult {
  const onlyDigits = cpf?.replace(/\D/g, '')
  if (!cpf || onlyDigits.length === 0) {
    return { success: false, message: 'Campo obrigatório' }
  } else if (!cpfValidate(onlyDigits)) {
    return { success: false, message: 'CPF inválido' }
  } else {
    return { success: true }
  }
}

export function cpfValidate(cpf: string): boolean {
  cpf = cpf.replace(/[^\d]+/g, '')
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false

  let soma = 0
  for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i)
  let resto = 11 - (soma % 11)
  if (resto === 10 || resto === 11) resto = 0
  if (resto !== parseInt(cpf.charAt(9))) return false

  soma = 0
  for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i)
  resto = 11 - (soma % 11)
  if (resto === 10 || resto === 11) resto = 0
  return resto === parseInt(cpf.charAt(10))
}

export function phoneValidation(phone: string): ValidationResult {
  const onlyDigits = phone?.replace(/\D/g, '')
  if (!onlyDigits || onlyDigits.length === 0) {
    return { success: false, message: 'Campo obrigatório' }
  } else if (!phoneValidate(phone)) {
    return { success: false, message: 'Celular inválido' }
  } else {
    return { success: true }
  }
}

export function phoneValidate(cel: string): boolean {
  return /^\(\d{2}\) \d{5}-\d{4}$/.test(cel)
}