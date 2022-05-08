import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "dad4b17f9f96c4",
    pass: "d4f825732dae71"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData){
    await transport.sendMail({
      from: 'Equipe Feedget <pedro@feedget.com>',
      to: 'Pedro Souza <pedromigueldesouza@gmail.com>',
      subject,
      html: body,
    });
  };
}