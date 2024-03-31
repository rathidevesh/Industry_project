import React, { useState } from 'react';

const AddCandidateForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        DOB: '',
        phoneNumber: '',
        address: '',
        aadhar: null,
        images: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append('name', formData.name);
        form.append('email', formData.email);
        form.append('DOB', formData.DOB);
        form.append('phoneNumber', formData.phoneNumber);
        form.append('address', formData.address);
        form.append('aadhar', formData.aadhar);
        form.append('images', formData.images);

        try {
            const response = await fetch('http://localhost:5000/api/Candidate_info/add-candidate', {
                method: 'POST',
                body: form
            });

            const data = await response.json();
            alert(data.message);
        } catch (error) {
            console.error(error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <h1>Add Candidate</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label><br />
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label><br />
                <label>
                    Date of Birth:
                    <input type="date" name="DOB" value={formData.DOB} onChange={handleChange} required />
                </label><br />
                <label>
                    Phone Number:
                    <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                </label><br />
                <label>
                    Address:
                    <textarea name="address" value={formData.address} onChange={handleChange} required></textarea>
                </label><br />
                <label>
                    Aadhar (PDF):
                    <input type="file" name="aadhar" accept=".pdf" onChange={handleChange} required />
                </label><br />
                <label>
                    Images (JPEG/PNG):
                    <input type="file" name="images" accept="image/jpeg, image/png" onChange={handleChange} required />
                </label><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddCandidateForm;
