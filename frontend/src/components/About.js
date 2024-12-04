import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var bio = this.props.data.bio;
         var email = this.props.data.email;
      }

      return (
         <section id="about">
            <div className="row">
               <div className="five columns main-col">
                  <h2>About Me</h2>

                  <p>{bio}</p>
               </div>
               <div className="four columns contact-details">
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
