import { useState } from 'react';
import '@/app/css/forms.css';

export const WitnessForm = ({ data, onNext, onPrevious }) => {
    const [formData, setFormData] = useState({
        witnessFullName: '',
        witnessOccupation: '',
        witnessTelephone: '',
        witnessEmail: '',
        witnessResidentialAddress: '',
        witnessPostalAddress: '',
        witnessIdOrPassportNo: '',
        witnessPlaceOfIssue: '',
        witnessDateOfIssue: '',
    });

    const validOccupations = [
        'Pastor',
        'Lawyer',
        'Doctor',
        'Engineer',
        'Managing Director',
        'Head Master',
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext(formData);
    };

    return (
        <div className="form-card wide">
            <div className="form-header">
                <h2 className="form-title">Witness (To be filled by the Admin)</h2>
                <p className="form-description">
                    This section should be completed by an authorized administrator.
                    The witness must have a valid stamp and be one of the qualified professionals listed below.
                </p>
            </div>

            <div className="alert-box warning">
                <strong>Important:</strong> The witness must be one of the following:
                Pastor, Lawyer, Doctor, Engineer, Managing Director, or Head Master, and must have a valid official stamp.
            </div>

            <form onSubmit={handleSubmit} className="form-body">
                <div className="form-grid">
                    <div className="form-group">
                        <label htmlFor="witnessFullName">Full Name</label>
                        <input
                            id="witnessFullName"
                            name="witnessFullName"
                            value={formData.witnessFullName}
                            onChange={handleChange}
                            required
                            placeholder="Enter witness full name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="witnessOccupation">Occupation</label>
                        <select
                            id="witnessOccupation"
                            name="witnessOccupation"
                            value={formData.witnessOccupation}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select occupation</option>
                            {validOccupations.map((occ) => (
                                <option key={occ} value={occ}>{occ}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="witnessTelephone">Telephone</label>
                        <input
                            id="witnessTelephone"
                            name="witnessTelephone"
                            type="tel"
                            value={formData.witnessTelephone}
                            onChange={handleChange}
                            required
                            placeholder="Enter witness telephone"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="witnessEmail">Email</label>
                        <input
                            id="witnessEmail"
                            name="witnessEmail"
                            type="email"
                            value={formData.witnessEmail}
                            onChange={handleChange}
                            required
                            placeholder="Enter witness email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="witnessResidentialAddress">Residential Address</label>
                        <input
                            id="witnessResidentialAddress"
                            name="witnessResidentialAddress"
                            value={formData.witnessResidentialAddress}
                            onChange={handleChange}
                            required
                            placeholder="Enter witness residential address"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="witnessPostalAddress">Postal Address</label>
                        <input
                            id="witnessPostalAddress"
                            name="witnessPostalAddress"
                            value={formData.witnessPostalAddress}
                            onChange={handleChange}
                            required
                            placeholder="Enter witness postal address"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="witnessIdOrPassportNo">ID or Passport Number</label>
                        <input
                            id="witnessIdOrPassportNo"
                            name="witnessIdOrPassportNo"
                            value={formData.witnessIdOrPassportNo}
                            onChange={handleChange}
                            required
                            placeholder="Enter ID or passport number"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="witnessPlaceOfIssue">Place of Issue</label>
                        <input
                            id="witnessPlaceOfIssue"
                            name="witnessPlaceOfIssue"
                            value={formData.witnessPlaceOfIssue}
                            onChange={handleChange}
                            required
                            placeholder="Enter place of issue"
                        />
                    </div>

                    <div className="form-group full">
                        <label htmlFor="witnessDateOfIssue">Date of Issue</label>
                        <input
                            type="date"
                            id="witnessDateOfIssue"
                            name="witnessDateOfIssue"
                            value={formData.witnessDateOfIssue}
                            onChange={handleChange}
                            required
                            max={new Date().toISOString().split('T')[0]}
                        />
                    </div>
                </div>

            </form>
        </div>
    );
};
