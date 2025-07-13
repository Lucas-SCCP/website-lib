import emailService from '../services/EmailService';

class ButtonActionFactory {
  static create(action: string, data: any): Promise<any> {
    switch (action) {
      case 'sendMail':
        return emailService.sendMail(data);
      default:
        throw new Error('Invalid button action: ' + action);
    }
  }
}

export default ButtonActionFactory;