"use server";
import { sendEmail } from "@/lib/brevo";

export const handleEmailForm = async (formData: FormData): Promise<void> => {
  const propertyName: FormDataEntryValue | null = formData.get("propertyName");
  const to: FormDataEntryValue | null = formData.get("to");

  if (!propertyName || !to) {
    throw new Error(
      "Error, not all the data was retrieved to send the email!"
    );
  }

  await sendEmail(propertyName.toString(), to.toString());
};
