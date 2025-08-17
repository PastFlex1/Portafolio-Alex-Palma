'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const sendEmailSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce una dirección de correo válida.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

// Initialize Resend with the API key directly as requested.
const resend = new Resend('re_ha9s1Jay_AcnRPqkdY2YQDP2HrrwifGkC');

export async function sendEmailAction(prevState: any, formData: FormData) {
  const validatedFields = sendEmailSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    const errorMessage = validatedFields.error.errors.map(e => e.message).join(', ');
    return {
      success: false,
      error: errorMessage,
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    const { data, error } = await resend.emails.send({
      // ⚠️ Usando el nuevo dominio verificado. ¡Esto debería funcionar!
      from: 'Portfolio <contacto@nuevodominio.store>',
      to: ['past6867@gmail.com'],
      subject: `Nuevo mensaje de tu portfolio de parte de: ${name}`,
      reply_to: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #9400D3;">Nuevo Mensaje del Formulario</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Correo Electrónico:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <p style="white-space: pre-wrap; margin: 0; padding: 15px; background-color: #f9f9f9; border-radius: 5px; border: 1px solid #ddd;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return { success: false, error: error.message };
    }

    console.log('Email sent successfully:', data);
    return { success: true, error: null };
  } catch (exception) {
    console.error('Error sending email:', exception);
    const errorMessage = exception instanceof Error ? exception.message : 'An unknown error occurred.';
    return { success: false, error: errorMessage };
  }
}
