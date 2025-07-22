import inputValidateService from '../services/InputValidateService';

type ValidationResult = {
  success: boolean
  message?: string
  [key: string]: any
}

class InputValidateFactory {
  static factory(input_validate_type: number, value: any): ValidationResult {
    switch (input_validate_type) {
      case 1: //'name':
        return inputValidateService.nameValidation(value)
      case 2: //'email':
        return inputValidateService.emailValidation(value)
      case 3: //'cpf':
        return inputValidateService.cpfValidation(value)
      case 4: //'phone':
        return inputValidateService.phoneValidation(value)
      case 5: //'birthDate':
        return inputValidateService.birthDateValidation(value)
      default:
        throw new Error('Input validate not found: ' + input_validate_type)
    }
  }
}

export default InputValidateFactory