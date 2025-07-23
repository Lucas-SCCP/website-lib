import { EmailService } from '../services/EmailService'
import { ButtonActionEnum } from '../constants/ButtonActionEnum'
import type { FormFieldsType } from '../types/FormFieldsType'
import type { MailBodyType } from '../types/MailBodyType'

export class ButtonActionFactory {
  async build(actionId: number, data: FormFieldsType[]): Promise<MailBodyType | boolean> {
    const emailService = new EmailService('https://api.example.com')

    switch (actionId) {
      case ButtonActionEnum.SendMail:
        return emailService.sendMail(data)
      default:
        throw new Error('Invalid button action: ' + actionId)
    }
  }
}
