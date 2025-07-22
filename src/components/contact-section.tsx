
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useLanguage } from '@/context/language-context';
import SplitText from './split-text';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

const ContactSection = () => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const { t, language } = useLanguage();

  const formSchema = z.object({
    name: z.string().min(2, {
      message: t('contact.form.error_name'),
    }),
    email: z.string().email({
      message: t('contact.form.error_email'),
    }),
    message: z.string().min(10, {
      message: t('contact.form.error_message'),
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    // The key is used to re-render the form when the language changes
    key: language,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSuccessModalOpen(true);
    form.reset();
  }

  return (
    <>
      <section id="contact" className="w-full py-24 md:py-32">
        <div className="container mx-auto grid items-center justify-center gap-8 px-4 text-center md:px-6">
          <div className="space-y-3">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">{t('contact.badge')}</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              <SplitText
                  text={t('contact.title')}
                  from={{ y: 120, scaleY: 2.3, scaleX: 0.7, opacity: 0 }}
                  to={{ y: 0, scaleY: 1, scaleX: 1, opacity: 1 }}
                  duration={1}
                  ease="back.inOut(2)"
                  delay={30}
              />
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t('contact.subtitle')}
            </p>
          </div>
          
          <Card className="mx-auto w-full max-w-lg shadow-lg">
              <CardContent className="p-6 sm:p-8">
                  <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-left">
                      <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                          <FormItem>
                              <FormLabel>{t('contact.form.name')}</FormLabel>
                              <FormControl>
                              <Input placeholder={t('contact.form.name_placeholder')} {...field} />
                              </FormControl>
                              <FormMessage />
                          </FormItem>
                          )}
                      />
                      <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                          <FormItem>
                              <FormLabel>{t('contact.form.email')}</FormLabel>
                              <FormControl>
                              <Input placeholder={t('contact.form.email_placeholder')} {...field} />
                              </FormControl>
                              <FormMessage />
                          </FormItem>
                          )}
                      />
                      <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                          <FormItem>
                              <FormLabel>{t('contact.form.message')}</FormLabel>
                              <FormControl>
                              <Textarea placeholder={t('contact.form.message_placeholder')} {...field} rows={5} />
                              </FormControl>
                              <FormMessage />
                          </FormItem>
                          )}
                      />
                      <Button type="submit" className="w-full !mt-6" size="lg">{t('contact.form.submit')}</Button>
                      </form>
                  </Form>
              </CardContent>
          </Card>

          <div className="flex justify-center space-x-4 mt-4">
              <a href="https://github.com/PastFlex1" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/alex-palma-b7b86431b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:alex.palma@example.com" aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-6 w-6" />
              </a>
          </div>
        </div>
      </section>

      <AlertDialog open={isSuccessModalOpen} onOpenChange={setIsSuccessModalOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex justify-center items-center">
                <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
            </div>
            <AlertDialogTitle className="text-center">{t('contact.form.success_title')}</AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              {t('contact.form.success_description')}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setIsSuccessModalOpen(false)}>Cerrar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ContactSection;
