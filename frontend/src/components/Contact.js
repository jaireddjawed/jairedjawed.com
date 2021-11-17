import React from 'react';
import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import TextField from './TextField';
import Recaptcha from 'react-google-recaptcha';

function Contact() {
   return (
      <section id="contact">
         <div className="row section-head">
            <div className="two columns header-col">
               <h1>
                  <span>Get In Touch.</span>
               </h1>
            </div>
         </div>

         <div className="row">
            <div className="nine columns">
               <Formik
                  initialValues={{ name: '', email: '', subject: '', message: '', recaptchaToken: '' }}
                  validationSchema={object().shape({
                     name: string().required(),
                     email: string().email().required(),
                     subject: string().required(),
                     message: string().required(),
                  })}
                  onSubmit={async ({ name, email, subject, message, recaptchaToken }, { resetForm }) => {
                     try {
                        await fetch('/send-email', {
                           headers: {
                              Accept: 'application/json',
                              'Content-Type': 'application/json'
                           },
                           method: 'POST',
                           body: JSON.stringify({
                              name,
                              email,
                              subject,
                              message,
                              recaptchaToken,
                           }),
                        });

                        alert('Thank you for submitting your contact info. I will reply shortly.');
                        resetForm();
                     } catch (err) {
                        alert(err.message);
                     }
                  }}
                  render={({ handleSubmit, setFieldValue, setSubmitting }) => (
                     <Form id="contactForm" onSubmit={handleSubmit}>
                        <fieldset>
                           <TextField name="name" label="Name" />
                           <TextField type="email" name="email" label="Email" />
                           <TextField name="subject" label="Subject" />
                           <TextField name="message" label="Message" isTextarea />
                           <div className="recaptcha-container">
                              <Recaptcha
                                 sitekey="6LfxJD0dAAAAAAUhssWDoUGVBA3mINP0PAfNo7rk"
                                 render="explicit"
                                 onChange={(value) => {
                                    setFieldValue('recaptchaToken', value);
                                    setSubmitting(false);
                                 }}
                              />
                           </div>
                           <div>
                              <button
                                 type="submit"
                                 className="submit"
                              >
                                 Submit
                              </button>
                           </div>
                        </fieldset>
                     </Form>
                  )}
               />
            </div>
         </div>
      </section>
   );
}

export default Contact;
