import React, { useEffect, useState } from 'react';
import '@/app/css/forms.css';

export const PersonalInformationForm = ({ onNext, onPrevious, setAllData }) => {
    const [formData, setFormData] = useState({
        title: '',
        surname: '',
        firstName: '',
        otherNames: '',
        maidenName: '',
        previousNames: '',
        gender: '',
        dateOfBirth: '',
        cityOfBirth: '',
        countryOfBirth: '',
        height: '',
        eyeColour: '',
        hairColour: '',
        visiblePeculiarities: '',
        nationality: 'Ghanaian',
        dualCitizenship: '',
        maritalStatus: '',
        profession: '',
    });

    const titles = ['Mr', 'Mrs', 'Miss', 'Ms', 'Dr', 'Prof', 'Rev', 'Chief'];
    const maritalStatuses = ['Single', 'Married', 'Divorced', 'Widowed', 'Separated'];

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleGenderChange = (e) => {
        const { value } = e.target;
        setFormData((prev) => ({ ...prev, gender: value }));
    };

    useEffect(() => {
        setAllData(formData);
    }, [formData, setAllData]);

    const handlePush = () => {
        localStorage.setItem('applicationForm', JSON.stringify(formData));
        const clientData = JSON.parse(localStorage.getItem('applicationForm'));
        console.log(clientData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // if (onNext) onNext(); // Call onNext if provided
    };

    return (
        <div className="form-card">
            <h2>Personal Information</h2>
            <p className="description">
                Please provide your personal details as they appear on your official documents
            </p>

            <form className="form-grid" onSubmit={handleSubmit}>
                {/* TITLE */}
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <select id="title" value={formData.title} onChange={handleChange}>
                        <option value="">Select title</option>
                        {titles.map((title) => (
                            <option key={title} value={title}>{title}</option>
                        ))}
                    </select>
                </div>

                {/* Name Fields */}
                {['surname', 'firstName', 'otherNames', 'maidenName', 'previousNames'].map((field) => (
                    <div className="form-group" key={field}>
                        <label htmlFor={field}>{field.replace(/([A-Z])/g, ' $1')}</label>
                        <input id={field} value={formData[field]} onChange={handleChange} />
                    </div>
                ))}

                {/* Gender */}
                <div className="form-group full-width">
                    <label>Gender</label>
                    <div className="radio-group">
                        {['male', 'female', 'other'].map((gender) => (
                            <label key={gender}>
                                <input
                                    type="radio"
                                    name="gender"
                                    value={gender}
                                    checked={formData.gender === gender}
                                    onChange={handleGenderChange}
                                />
                                {gender.charAt(0).toUpperCase() + gender.slice(1)}
                            </label>
                        ))}
                    </div>
                </div>

                {/* More Fields */}
                {[
                    ['dateOfBirth', 'date'],
                    ['cityOfBirth'],
                    ['countryOfBirth'],
                    ['height'],
                    ['eyeColour'],
                    ['hairColour'],
                    ['visiblePeculiarities'],
                    ['dualCitizenship'],
                    ['profession'],
                ].map(([field, type = 'text']) => (
                    <div className="form-group" key={field}>
                        <label htmlFor={field}>{field.replace(/([A-Z])/g, ' $1')}</label>
                        <input
                            id={field}
                            type={type}
                            value={formData[field]}
                            onChange={handleChange}
                            {...(type === 'date' ? {
                                min: '1900-01-01',
                                max: new Date().toISOString().split('T')[0],
                            } : {})}
                        />
                    </div>
                ))}

                {/* Nationality (Disabled) */}
                <div className="form-group">
                    <label htmlFor="nationality">Nationality</label>
                    <input
                        id="nationality"
                        value={formData.nationality}
                        disabled
                        className="disabled-input"
                    />
                </div>

                {/* Marital Status */}
                <div className="form-group">
                    <label htmlFor="maritalStatus">Marital Status</label>
                    <select
                        id="maritalStatus"
                        value={formData.maritalStatus}
                        onChange={handleChange}
                    >
                        <option value="">Select marital status</option>
                        {maritalStatuses.map((status) => (
                            <option key={status} value={status}>{status}</option>
                        ))}
                    </select>
                </div>

                {/* Buttons */}
                <div className="form-group full-width">
                    <button type="submit">Save and move Next</button>
                    {/* <button type="button" onClick={handlePush}>Save to LocalStorage</button> */}
                </div>
            </form>
        </div>
    );
};
