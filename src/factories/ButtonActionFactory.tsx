import { EmailService } from '../services/EmailService';
import type { FormFieldsType } from '../types/FormFieldsType';
import type { MailBodyType } from '../types/MailBodyType';

export class ButtonActionFactory {
  async build(actionId: number, data: FormFieldsType[]): Promise<MailBodyType | boolean> {
    const emailService = new EmailService();
    
    switch (actionId) {
      case 1:
        return emailService.sendMail(data);
      default:
        throw new Error('Invalid button action: ' + actionId);
    }
  }
}