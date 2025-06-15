import { useState } from 'react';
import "@/app/css/forms.css"

export const EducationForm = ({ data, onNext, onPrevious }) => {
    const [formData, setFormData] = useState({
        institutionName: '',
        periodFrom: '',
        periodTo: '',
        schoolPostalAddress: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext(formData);
    };

    return (
        <div className="form-card">
            <div className="form-header">
                <h2>Education</h2>
                <p>Please provide details about your most recent educational institution</p>
            </div>

            <form onSubmit={handleSubmit} className="form-content">
                <div className="form-group">
                    <label htmlFor="institutionName">Institution Name</label>
                    <input
                        type="text"
                        id="institutionName"
                        value={formData.institutionName}
                        onChange={(e) => setFormData(prev => ({ ...prev, institutionName: e.target.value }))}
                        placeholder="Enter institution name"
                        required
                    />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="periodFrom">Period From</label>
                        <input
                            type="date"
                            id="periodFrom"
                            value={formData.periodFrom}
                            max={formData.periodTo || new Date().toISOString().split('T')[0]}
                            onChange={(e) => setFormData(prev => ({ ...prev, periodFrom: e.target.value }))}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="periodTo">Period To</label>
                        <input
                            type="date"
                            id="periodTo"
                            value={formData.periodTo}
                            min={formData.periodFrom}
                            max={new Date().toISOString().split('T')[0]}
                            onChange={(e) => setFormData(prev => ({ ...prev, periodTo: e.target.value }))}
                            required
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="schoolPostalAddress">{"School's Postal Address"}</label>
                    <input
                        type="text"
                        id="schoolPostalAddress"
                        value={formData.schoolPostalAddress}
                        onChange={(e) => setFormData(prev => ({ ...prev, schoolPostalAddress: e.target.value }))}
                        placeholder="Enter school's postal address"
                        required
                    />
                </div>


            </form >
        </div >
    );
};
