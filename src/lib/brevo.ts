import * as brevo from "@getbrevo/brevo";

const BREVO_API_KEY: string | undefined = process.env.BREVO_API_KEY as string;

import { loadEmailTemplate } from "../utils/emailTemplateLoader";

const apiInstance = new brevo.TransactionalEmailsApi();

if (BREVO_API_KEY) {
  apiInstance.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    BREVO_API_KEY
  );
} else {
  throw new Error("The Brevo API key is not defined.");
}

const smtpEmail = new brevo.SendSmtpEmail();

export const sendEmail = async (propertyName: string, to: string) => {
  smtpEmail.subject = "[Suaka] Order confirmation! Thank You for Your Payment - Receipt";
  smtpEmail.to = [{ email: to, name: "John Doe" }];
  smtpEmail.htmlContent = loadEmailTemplate(propertyName, to);
  smtpEmail.sender = { name: "Suaka.com", email: "mbntngfadlillahh1212@gmail.com" };

  try {
    await apiInstance.sendTransacEmail(smtpEmail);
    window.localStorage.removeItem('emailData');
  } catch (error) {
    console.error("Error sending the email:", error);
  }
};
