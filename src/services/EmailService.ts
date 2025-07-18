type FormField = {
  name: string;
  value: string;
};

type SendMailParams = FormField[];

interface MailBody {
  senderName: string;
  sender: string;
  recipientName: string;
  recipient: string;
  title: string;
  message: string;
}

class EmailService {
  async sendMail(params: SendMailParams): Promise<boolean> {
    try {
      const body = this.createBody(params);
      const response = await fetch(
        `URL_API/send-mail`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer TOKEN`
          },
          body: JSON.stringify(body)
        }
      );

      if (!response.ok) {
        throw new Error(response.status.toString());
      }

      return true;
    } catch (error: any) {
      console.error('Erro ao buscar dados da API:', error);
      throw new Error(error instanceof Error ? error.message : String(error));
    }
  }

  createBody(params: SendMailParams): MailBody {
    const firstName = params.find(e => e.name === 'firstNameInput');
    const lastName = params.find(e => e.name === 'lastNameInput');
    const birthDate = params.find(e => e.name === 'birthDateField');
    const document = params.find(e => e.name === 'documentField');
    const email = params.find(e => e.name === 'emailField');
    const phone = params.find(e => e.name === 'phoneField');
    return {
      senderName: '[Site] CT Clean Foods',
      sender: 'contato@nois.dev.br',
      recipientName: 'CT Clean Foods',
      recipient: 'lucas.2601@gmail.com',
      title: 'Mensagem enviada pelo formulário do site',
      message: `Nome: ${firstName?.value ?? ''} ${lastName?.value ?? ''}\nData de Nascimento: ${birthDate?.value ?? ''}\nCPF: ${document?.value ?? ''}\nE-mail: ${email?.value ?? ''}\nCelular: ${phone?.value ?? ''}`
    };
  }
}

export { EmailService };