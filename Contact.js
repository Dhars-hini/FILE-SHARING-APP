import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or feedback about our file sharing app, feel free to contact us using the information below:</p>
      <ul>
        <li>Email:dg.dharshini24@gmail.com</li>
        <li>Phone: +1234567890</li>
        <li>Address: 123 File Share Avenue,Tiruppur,TamilNadu</li>
      </ul>
      <div className="quotes-container">
        
        <p>"The only way to do great work is to love what you do." - Steve Jobs</p>
        <p>"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful." - Albert Schweitzer</p>
        <p>"Believe you can and you're halfway there." - Theodore Roosevelt</p>
        <p>"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt</p>
      </div>
    </div>
  );
};

export default Contact;
