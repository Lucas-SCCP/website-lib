import inputValidateService from '../services/InputValidateService';

type ValidationResult = {
  success: boolean
  message?: string
  [key: string]: any
}

class InputValidateFactory {
  static factory(input_validate_type: string, value: any): ValidationResult {
    switch (input_validate_type) {
      case 'name':
        return inputValidateService.nameValidation(value)
      case 'email':
        return inputValidateService.emailValidation(value)
      case 'cpf':
        return inputValidateService.cpfValidation(value)
      case 'phone':
        return inputValidateService.phoneValidation(value)
      case 'birthDate':
        return inputValidateService.birthDateValidation(value)
      default:
        throw new Error('Input validate not found: ' + input_validate_type)
    }
  }
}

export default InputValidateFactory