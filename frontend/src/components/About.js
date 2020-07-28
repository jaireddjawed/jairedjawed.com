import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var bio = this.props.data.bio;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var resumeDownload = this.props.data.resumedownload;
      }

      return (
         <section id="about">
            <div className="row">
               <div className="six columns main-col">
                  <h2>About Me</h2>

                  <p>{bio}</p>
               </div>
               <div className="three columns contact-details">
                  <h2>Email Address</h2>
                  <p className="address">
                     <span><a href={`mailto:${email}`}>{email}</a></span>
                  </p>
               </div>
            </div>
         </section>
      );
   }
}

export default About;
