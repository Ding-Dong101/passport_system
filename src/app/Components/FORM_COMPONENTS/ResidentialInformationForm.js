import React, { useState } from 'react';

export const ResidentialInformationForm = ({ data, onNext, onPrevious }) => {
    const [formData, setFormData] = useState({
        houseNumber: '',
        streetName: '',
        digitalAddress: '',
        postalAddress: '',
        suburb: '',
        cityOfResidence: '',
        countryOfResidence: '',
        postalZipCode: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext(formData);
    };

    return (
        <div className="form-card">
            <h2>Residential Information</h2>
            <p className="description">Please provide your current residential address details</p>
            <form onSubmit={handleSubmit} className="form-grid">

                <div className="form-group">
                    <label htmlFor="houseNumber">House Number</label>
                    <input
                        id="houseNumber"
                        value={formData.houseNumber}
                        onChange={handleChange}
                        placeholder="Enter house number"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="streetName">Street Name</label>
                    <input
                        id="streetName"
                        value={formData.streetName}
                        onChange={handleChange}
                        placeholder="Enter street name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="digitalAddress">Digital Address (GhanaPost GPS)</label>
                    <input
                        id="digitalAddress"
                        value={formData.digitalAddress}
                        onChange={handleChange}
                        placeholder="Enter Ghana Post GPS address"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="postalAddress">Postal Address</label>
                    <input
                        id="postalAddress"
                        value={formData.postalAddress}
                        onChange={handleChange}
                        placeholder="Enter postal address"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="suburb">Suburb</label>
                    <input
                        id="suburb"
                        value={formData.suburb}
                        onChange={handleChange}
                        placeholder="Enter suburb"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="cityOfResidence">City of Residence</label>
                    <input
                        id="cityOfResidence"
                        value={formData.cityOfResidence}
                        onChange={handleChange}
                        placeholder="Enter city of residence"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="countryOfResidence">Country of Residence</label>
                    <input
                        id="countryOfResidence"
                        value={formData.countryOfResidence}
                        onChange={handleChange}
                        placeholder="Enter country of residence"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="postalZipCode">Postal/Zip Code</label>
                    <input
                        id="postalZipCode"
                        value={formData.postalZipCode}
                        onChange={handleChange}
                        placeholder="Enter postal/zip code"
                    />
                </div>

            </form >
        </div >
    );
};
