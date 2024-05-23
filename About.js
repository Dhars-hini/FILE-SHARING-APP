import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h1>About Us</h1>
        <p>Our File Sharing App is designed to provide a simple, secure, and efficient way to share files with others. Built with the latest technology, it ensures your data is safe and easily accessible.</p>
        
        <h2>Core Features:</h2>
        <ul>
          <li><strong>Secure Uploads:</strong> All files are uploaded through a secure connection and stored with high-level encryption.</li>
          <li><strong>Easy Downloads:</strong> Download files with a single click. No complicated processes.</li>
          <li><strong>File Management:</strong> Manage your files effortlessly. Delete files that are no longer needed.</li>
          <li><strong>User-Friendly Interface:</strong> Our intuitive interface makes file sharing a breeze for users of all levels.</li>
          <li><strong>Fast Performance:</strong> Enjoy quick upload and download speeds, ensuring productivity is never compromised.</li>
        </ul>

        <h2>Mission:</h2>
        <p>Our mission is to make file sharing as seamless and secure as possible. We aim to provide a platform where users can share their files without worrying about security breaches or complicated procedures.</p>

        <h2>How We Ensure Security:</h2>
        <ul>
          <li><strong>Encryption:</strong> All files are encrypted both in transit and at rest.</li>
          <li><strong>Regular Security Audits:</strong> We perform regular security audits to ensure our platform remains secure.</li>
          <li><strong>Access Controls:</strong> Implementing strict access controls to ensure only authorized users can access your files.</li>
        </ul>

       
      </div>
    </div>
  );
};

export default About;

