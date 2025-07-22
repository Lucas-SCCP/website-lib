import {
  nameValidation as nameValidationUtil,
  birthDateValidation as birthDateValidationUtil,
  dateValidate as dateValidateUtil,
  emailValidation as emailValidationUtil,
  emailValidate as emailValidateUtil,
  cpfValidation as cpfValidationUtil,
  cpfValidate as cpfValidateUtil,
  phoneValidation as phoneValidationUtil,
  phoneValidate as phoneValidateUtil
} from '../utils/InputValidators'

export interface ValidationResult {
  success: boolean
  message?: string
  [key: string]: string | boolean
}

class InputValidateService {
  nameValidation(name: string): ValidationResult {
    return nameValidationUtil(name)
  }

  birthDateValidation(birthDate: string): ValidationResult {
    return birthDateValidationUtil(birthDate)
  }

  dateValidate(date: string): boolean {
    return dateValidateUtil(date)
  }

  emailValidation(email: string): ValidationResult {
    return emailValidationUtil(email)
  }

  emailValidate(email: string): boolean {
    return emailValidateUtil(email)
  }

  cpfValidation(cpf: string): ValidationResult {
    return cpfValidationUtil(cpf)
  }

  cpfValidate(cpf: string): boolean {
    return cpfValidateUtil(cpf)
  }

  phoneValidation(phone: string): ValidationResult {
    return phoneValidationUtil(phone)
  }

  phoneValidate(cel: string): boolean {
    return phoneValidateUtil(cel)
  }
}

export { InputValidateService };