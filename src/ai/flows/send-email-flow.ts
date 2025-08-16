
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
    const apiKey = "re_ha9s1Jay_AcnRPqkdY2YQDP2HrrwifGkC";

    if (!apiKey || apiKey === "pega_aqui_tu_api_key_de_resend") {
      const errorMsg = 'Resend API key is not configured. Please paste your API key in src/ai/flows/send-email-flow.ts';
      console.error(errorMsg);
      return { success: false, error: errorMsg };
    }

    try {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: 'Portfolio <onboarding@resend.dev>',
        to: ['past667@gmail.com'],
        subject: `Nuevo mensaje de tu portfolio de parte de: ${input.name}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333; background-color: #f9f9f9; border-radius: 10px; border: 1px solid #eee;">
            <h2 style="color: #9400D3;">Nuevo Mensaje del Formulario</h2>
            <p>Has recibido un nuevo mensaje a través del formulario de tu portfolio.</p>
            <hr style="border: 0; border-top: 1px solid #ddd;" />
            <p><strong>Nombre:</strong> ${input.name}</p>
            <p><strong>Correo Electrónico:</strong> ${input.email}</p>
            <p><strong>Mensaje:</strong></p>
            <div style="background-color: #fff; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">
              <p style="white-space: pre-wrap; margin: 0;">${input.message}</p>
            </div>
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
