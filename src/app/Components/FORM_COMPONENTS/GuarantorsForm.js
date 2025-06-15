import React, { useState } from 'react';
import { ArrowLeft } from "react-bootstrap-icons";
import { ArrowRight } from "react-bootstrap-icons";
import '@/app/css/forms.css';

export const GuarantorsForm = ({ data, onNext, onPrevious }) => {
    const [formData, setFormData] = useState({
        guarantor1FullName: '',
        guarantor1Occupation: '',
        guarantor1Telephone: '',
        guarantor1Email: '',
        guarantor1ResidentialAddress: '',
        guarantor1PostalAddress: '',
        guarantor2FullName: '',
        guarantor2Occupation: '',
        guarantor2Telephone: '',
        guarantor2Email: '',
        guarantor2ResidentialAddress: '',
        guarantor2PostalAddress: '',
    });

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext(formData);
    };

    return (
        <div className="form-card">
            <div className="form-header">
                <h2>Guarantors (Not Parents)</h2>
                <p>
                    Please provide information for two guarantors who are not your parents.
                    These should be people who can vouch for your identity and character.
                </p>
            </div>
            <form onSubmit={handleSubmit} className="form-grid">
                {/* Guarantor 1 */}
                <div className="form-section">
                    <h3 className="section-title blue">Guarantor 1</h3>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="guarantor1FullName">Full Name</label>
                            <input
                                id="guarantor1FullName"
                                value={formData.guarantor1FullName}
                                onChange={(e) => handleChange('guarantor1FullName', e.target.value)}
                                placeholder="Enter full name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="guarantor1Occupation">Occupation</label>
                            <input
                                id="guarantor1Occupation"
                                value={formData.guarantor1Occupation}
                                onChange={(e) => handleChange('guarantor1Occupation', e.target.value)}
                                placeholder="Enter occupation"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="guarantor1Telephone">Telephone</label>
                            <input
                                id="guarantor1Telephone"
                                type="tel"
                                value={formData.guarantor1Telephone}
                                onChange={(e) => handleChange('guarantor1Telephone', e.target.value)}
                                placeholder="Enter telephone"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="guarantor1Email">Email</label>
                            <input
                                id="guarantor1Email"
                                type="email"
                                value={formData.guarantor1Email}
                                onChange={(e) => handleChange('guarantor1Email', e.target.value)}
                                placeholder="Enter email"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="guarantor1ResidentialAddress">Residential Address</label>
                            <input
                                id="guarantor1ResidentialAddress"
                                value={formData.guarantor1ResidentialAddress}
                                onChange={(e) => handleChange('guarantor1ResidentialAddress', e.target.value)}
                                placeholder="Enter residential address"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="guarantor1PostalAddress">Postal Address</label>
                            <input
                                id="guarantor1PostalAddress"
                                value={formData.guarantor1PostalAddress}
                                onChange={(e) => handleChange('guarantor1PostalAddress', e.target.value)}
                                placeholder="Enter postal address"
                                required
                            />
                        </div>
                    </div>
                </div>



                {/* Guarantor 2 */}
                <div className="form-section">
                    <h3 className="section-title green">Guarantor 2</h3>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="guarantor2FullName">Full Name</label>
                            <input
                                id="guarantor2FullName"
                                value={formData.guarantor2FullName}
                                onChange={(e) => handleChange('guarantor2FullName', e.target.value)}
                                placeholder="Enter full name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="guarantor2Occupation">Occupation</label>
                            <input
                                id="guarantor2Occupation"
                                value={formData.guarantor2Occupation}
                                onChange={(e) => handleChange('guarantor2Occupation', e.target.value)}
                                placeholder="Enter occupation"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="guarantor2Telephone">Telephone</label>
                            <input
                                id="guarantor2Telephone"
                                type="tel"
                                value={formData.guarantor2Telephone}
                                onChange={(e) => handleChange('guarantor2Telephone', e.target.value)}
                                placeholder="Enter telephone"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="guarantor2Email">Email</label>
                            <input
                                id="guarantor2Email"
                                type="email"
                                value={formData.guarantor2Email}
                                onChange={(e) => handleChange('guarantor2Email', e.target.value)}
                                placeholder="Enter email"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="guarantor2ResidentialAddress">Residential Address</label>
                            <input
                                id="guarantor2ResidentialAddress"
                                value={formData.guarantor2ResidentialAddress}
                                onChange={(e) => handleChange('guarantor2ResidentialAddress', e.target.value)}
                                placeholder="Enter residential address"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="guarantor2PostalAddress">Postal Address</label>
                            <input
                                id="guarantor2PostalAddress"
                                value={formData.guarantor2PostalAddress}
                                onChange={(e) => handleChange('guarantor2PostalAddress', e.target.value)}
                                placeholder="Enter postal address"
                                required
                            />
                        </div>
                    </div>
                </div>


            </form>
        </div>
    );
};
