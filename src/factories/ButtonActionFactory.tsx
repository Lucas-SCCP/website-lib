import { EmailService } from '../services/EmailService';

class ButtonActionFactory {
  static create(action: string, data: any): Promise<any> {
    switch (action) {
      case 'sendMail':
        const emailService = new EmailService();
        return emailService.sendMail(data);
      default:
        throw new Error('Invalid button action: ' + action);
    }
  }
}

export default ButtonActionFactory;