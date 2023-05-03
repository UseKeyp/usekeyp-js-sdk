import { MailData } from "../types/MailData";

export const mailData = (data: MailData) => {
  const fromEmail = "kaching.money.app@gmail.com";
  let emailUrl = `<a href="https://kaching.money">Click here</a>`;

  return {
    from: fromEmail,

    to: data.username,

    subject: `${data.username} has requested ${data.amount} ${data.asset}`,

    text: `${data.username} is requesting ${data.amount} ${data.asset} from you! ${emailUrl} to sign into Kaching and send your payments.`,

    html: `<p>Hi! 👋,</p><br>
    <p>${data.username} is requesting ${data.amount} ${data.asset} from you.</p><br>
    <p>To make your payment, ${emailUrl} to open Kaching and sign in.</p><br>
    <p>Using Kaching is simple! Sign up with your Gmail or Discord account, get crypto into your wallet and starting sending!</p>`,
  };
};
