import { InputValidateService } from '../services/InputValidateService'
import { InputValidateEnum } from '../constants/InputValidateEnum'

type ValidationResult = {
  success: boolean
  message?: string
  [key: string]: string | boolean
}

export class InputValidateFactory {
  build(input_validate_type: number, value: string): ValidationResult {
    const inputValidateService = new InputValidateService()
    switch (input_validate_type) {
      case InputValidateEnum.Name:
        return inputValidateService.nameValidation(value)
      case InputValidateEnum.Email:
        return inputValidateService.emailValidation(value)
      case InputValidateEnum.Cpf:
        return inputValidateService.cpfValidation(value)
      case InputValidateEnum.Phone:
        return inputValidateService.phoneValidation(value)
      case InputValidateEnum.BirthDate:
        return inputValidateService.birthDateValidation(value)
      default:
        throw new Error('Input validate not found: ' + input_validate_type)
    }
  }
}
