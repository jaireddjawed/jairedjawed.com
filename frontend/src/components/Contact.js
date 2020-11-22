import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import TextField from './TextField';

class Contact extends Component {
   render() {
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
                     initialValues={{ name: '', email: '', subject: '', message: '' }}
                     validationSchema={object().shape({
                        name: string().required(),
                        email: string().email().required(),
                        subject: string().required(),
                        message: string().required(),
                     })}
                     onSubmit={async ({ name, email, subject, message }, { resetForm }) => {
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
                              message
                           }),
                        })
                           .then(() => {
                              alert('Thank you for submitting your contact info. I will reply shortly.');
                              resetForm();
                           })
                           .catch(err => {
                              alert(err.message);
                           });
                     }}
                     render={({ handleSubmit }) => (
                        <Form id="contactForm" onSubmit={handleSubmit}>
                           <fieldset>
                              <TextField name="name" label="Name" />
                              <TextField type="email" name="email" label="Email" />
                              <TextField name="subject" label="Subject" />
                              <TextField name="message" label="Message" isTextarea />
                              <div>
                                 <button type="submit" className="submit">Submit</button>
                                 <span id="image-loader">
                                    <img alt="" src="images/loader.gif" />
                                 </span>
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
}

export default Contact;
