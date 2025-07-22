import { EmailService } from '../services/EmailService';

class ButtonActionFactory {
  static create(actionId: number, data: any): Promise<any> {
    switch (actionId) {
      case 1:
        const emailService = new EmailService();
        return emailService.sendMail(data);
      default:
        throw new Error('Invalid button action: ' + actionId);
    }
  }
}

export default ButtonActionFactory;