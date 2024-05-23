import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to the File Sharing App</h1>
        <p>This is the home page of our file sharing application. Here, you can easily upload, download, and manage your files. Our platform ensures your files are secure and easily accessible.</p>
        
        <h2>Features:</h2>
        <ul>
          <li>Secure file upload and storage</li>
          <li>Easy file download</li>
          <li>Manage your files with delete options</li>
          <li>User-friendly interface</li>
          <li>Fast and reliable file sharing</li>
        </ul>

        <h2>How to Use:</h2>
        <ol>
          <li>Navigate to the File Share section from the menu.</li>
          <li>Select a file from your device to upload.</li>
          <li>Click the upload button to store the file securely on our server.</li>
          <li>Manage your files: Download or delete them as needed.</li>
        </ol>

        <h2>Why Choose Us?</h2>
        <p>Our file sharing app is designed with the user in mind. We prioritize security, speed, and ease of use. Whether you're sharing personal files or collaborating on a project, our platform makes it simple and efficient.</p>
        
        <h2>Get Started:</h2>
        <p>Ready to start sharing files? Head over to the <a href="/fileshare">File Share</a> section and upload your first file today!</p>
      </div>
    </div>
  );
};

export default Home;
