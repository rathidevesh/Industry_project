import React, { useState } from 'react';

const UploadCSV = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      setMessage('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/user-route/importuser', {
        method: 'POST',
        body: formData,
        withCredentials: true,    
        crossorigin: true,    
        mode: 'no-cors',
        headers: {
            'Content-Type':'form-data'
        }
      });

      const responseBody = await response.text();
        console.log('Response Body:', responseBody); // Log the response body

        const data = JSON.parse(responseBody);

      if (data.success) {
        setMessage('File uploaded successfully.');
      } else {
        setMessage(data.msg);
      }
    } catch (error) {
      setMessage('Error uploading file: ' + error.message);
    }
  };

  return (
    <div>
      <h1>Upload CSV File</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="file" onChange={handleFileChange} accept=".csv" />
        <button type="submit">Upload</button>
      </form>
      <div>{message}</div>
    </div>
  );
};

export default UploadCSV;
