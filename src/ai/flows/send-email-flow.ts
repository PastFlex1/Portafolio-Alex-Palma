
'use server';
/**
 * @fileOverview A flow for sending emails using Resend.
 *
 * - sendEmail - A function that handles sending an email.
 * - SendEmailInput - The input type for the sendEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { Resend } from 'resend';

const SendEmailInputSchema = z.object({
  name: z.string().describe('The name of the person sending the email.'),
  email: z.string().email().describe('The email address of the sender.'),
  message: z.string().describe('The content of the email message.'),
});
export type SendEmailInput = z.infer<typeof SendEmailInputSchema>;

export async function sendEmail(input: SendEmailInput): Promise<{ success: boolean; error?: string }> {
    return sendEmailFlow(input);
}

const sendEmailFlow = ai.defineFlow(
  {
    name: 'sendEmailFlow',
    inputSchema: SendEmailInputSchema,
    outputSchema: z.object({ success: z.boolean(), error: z.string().optional() }),
  },
  async (input) => {
    //
    // IMPORTANT: Paste your Resend API key here for it to work.
    // This is not a recommended practice for production, but it will solve the problem in this environment.
    //
    const apiKey = "re_ffYsYMqN_full_access_key_placeholder";

    if (!apiKey || apiKey === "pega_aqui_tu_api_key_de_resend") {
      const errorMsg = 'Resend API key is not configured. Please paste your API key in src/ai/flows/send-email-flow.ts';
      console.error(errorMsg);
      return { success: false, error: errorMsg };
    }

    try {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: 'Portfolio <contact@nuevodominio.store>',
        to: ['past667@gmail.com'],
        subject: `New message from ${input.name} via your portfolio`,
        reply_to: input.email,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #9400D3;">New Message from Portfolio Contact Form</h2>
            <p><strong>Name:</strong> ${input.name}</p>
            <p><strong>Email:</strong> ${input.email}</p>
            <hr style="border: 0; border-top: 1px solid #eee;" />
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${input.message}</p>
          </div>
        `,
      });
      return { success: true };
    } catch (error) {
      console.error('Error sending email:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
      return { success: false, error: errorMessage };
    }
  }
);
