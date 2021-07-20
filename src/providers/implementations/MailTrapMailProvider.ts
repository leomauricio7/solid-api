import { EmailProvider, IMessage } from "../IMailProvider";
import nodemailder from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export class MailTrapMailProvider implements EmailProvider {
  private transport: Mail;

  constructor() {
    this.transport = nodemailder.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "14f0d729a1efb8",
        pass: "00ea4b1f21280d",
      },
    });
  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transport.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body,
    });
  }
}
