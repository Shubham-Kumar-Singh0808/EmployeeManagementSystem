import React from 'react';

const DisplayData = () => {
  const formData = JSON.parse(localStorage.getItem('formData'));

  return (
    <div>
      <h1>User Input:</h1>
      <ul>
        <li>Name: {formData.name}</li>
        <li>Email: {formData.email}</li>
        <li>Phone: {formData.phone}</li>
        <li>Age: {formData.age}</li>
        <li>Address: {formData.address}</li>
        <li>Gender: {formData.gender}</li>
      </ul>
    </div>
  );
};

export default DisplayData;