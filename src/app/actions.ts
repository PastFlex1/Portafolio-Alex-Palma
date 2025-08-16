'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const sendEmailSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

const resend = new Resend('re_ha9s1Jay_AcnRPqkdY2YQDP2HrrwifGkC');

export async function sendEmailAction(prevState: any, formData: FormData) {
  const validatedFields = sendEmailSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      error: 'Invalid form data. Please check your entries.',
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['past6867@gmail.com'],
      subject: `Nuevo mensaje de tu portfolio de parte de: ${name}`,
      reply_to: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; background-color: #f9f9f9; border-radius: 10px; border: 1px solid #eee;">
          <h2 style="color: #9400D3;">Nuevo Mensaje del Formulario</h2>
          <p>Has recibido un nuevo mensaje a través del formulario de tu portfolio.</p>
          <hr style="border: 0; border-top: 1px solid #ddd;" />
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Correo Electrónico:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <div style="background-color: #fff; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">
            <p style="white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #ddd; margin-top: 20px;" />
          <p style="font-size: 12px; color: #777;">Para responder a este mensaje, simplemente haz clic en "Responder" en tu cliente de correo.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, error: null };
  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, error: errorMessage };
  }
}
