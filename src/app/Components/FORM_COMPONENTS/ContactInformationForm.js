import { useState } from 'react';
// import './ContactInformationForm.css';

export const ContactInformationForm = ({ data, onNext, onPrevious }) => {
    const [formData, setFormData] = useState({
        nationalIdNumber: '',
        ssnitNumber: '',
        telephoneNumber: '',
        emailAddress: '',
        // ...other fields from other steps
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        onNext(formData);
    };

    return (
        <div className="form-card">
            <div className="card-header">
                <h2 className="card-title">ID & Contact Information</h2>
                <p className="card-description">Please provide your identification and contact details</p>
            </div>
            <div className="card-content">
                <form onSubmit={handleSubmit} className="form">
                    <div className="form-group">
                        <label htmlFor="nationalIdNumber">National ID Number (Ghana Card)</label>
                        <input
                            id="nationalIdNumber"
                            value={formData.nationalIdNumber}
                            onChange={(e) =>
                                setFormData((prev) => ({ ...prev, nationalIdNumber: e.target.value }))
                            }
                            placeholder="Enter Ghana Card number"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="ssnitNumber">SSNIT Number (Optional)</label>
                        <input
                            id="ssnitNumber"
                            value={formData.ssnitNumber}
                            onChange={(e) =>
                                setFormData((prev) => ({ ...prev, ssnitNumber: e.target.value }))
                            }
                            placeholder="Enter SSNIT number"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="telephoneNumber">Telephone Number</label>
                        <input
                            id="telephoneNumber"
                            type="tel"
                            value={formData.telephoneNumber}
                            onChange={(e) =>
                                setFormData((prev) => ({ ...prev, telephoneNumber: e.target.value }))
                            }
                            placeholder="Enter telephone number"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="emailAddress">Email Address</label>
                        <input
                            id="emailAddress"
                            type="email"
                            value={formData.emailAddress}
                            onChange={(e) =>
                                setFormData((prev) => ({ ...prev, emailAddress: e.target.value }))
                            }
                            placeholder="Enter email address"
                            required
                        />
                    </div>


                </form>
            </div>
        </div>
    );
};
