import { useState } from 'react';
import '@/app/css/forms.css';

export const ReviewSubmitForm = ({ data, onNext, onPrevious, allData }) => {
    const [confirmed, setConfirmed] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const generateApplicationId = () => {
        return `PPA-${Date.now().toString().slice(-8)}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!confirmed) {
            alert('Please confirm that all information is true and correct');
            return;
        }

        setIsSubmitting(true);

        await new Promise((resolve) => setTimeout(resolve, 2000));

        const submissionData = {
            ...allData,
            applicationId: generateApplicationId(),
            submissionDate: new Date(),
            status: 'Pending',
            confirmed: true,
        };

        onNext(submissionData);
        setIsSubmitting(false);
    };

    const formatDisplayValue = (value) => {
        if (!value) return 'Not provided';
        if (value instanceof Date) return value.toLocaleDateString();
        if (typeof value === 'object' && value.name) return value.name;
        return value.toString();
    };

    const renderSection = (title, stepData, colorClass) => {
        if (!stepData) return null;

        return (
            <div className="review-section">
                <h3 className={`section-title ${colorClass}`}>{title}</h3>
                <div className="section-grid">
                    {Object.entries(stepData).map(([key, value]) => (
                        <div key={key} className="field-item">
                            <span className="field-label">
                                {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}:
                            </span>
                            <p className="field-value">{formatDisplayValue(value)}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="form-card wide">
            <div className="form-header">
                <h2 className="form-title">Review & Submit Application</h2>
                <p className="form-description">
                    Please review all the information below carefully before submitting your passport application.
                </p>
            </div>

            <div className="form-body">
                <div className="info-box success">
                    <strong>Application Complete</strong>
                    <p>All required sections have been completed. You can now submit your application.</p>
                </div>
                {/* 
                {renderSection('Passport Application Details', allData[1], 'blue')}
                <hr />
                {renderSection('Personal Information', allData[2], 'purple')}
                <hr />
                {renderSection('ID & Contact Information', allData[3], 'green')}
                <hr />
                {renderSection('Residential Information', allData[4], 'orange')}
                <hr />
                {renderSection('Education', allData[5], 'pink')}
                <hr />
                {renderSection('Parental Information', allData[6], 'indigo')}
                <hr /> */}

                {/* Document Uploads */}
                {/* {allData[7] && (
                    <>
                        <h3 className="section-title red">Document Uploads</h3>
                        <div className="section-grid">
                            {Object.entries(allData[7]).map(([key, file]) => (
                                file && (
                                    <div key={key} className="upload-preview">
                                        <span className="file-name">
                                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                                        </span>
                                        <span className="file-meta">{file.name}</span>
                                        <span className="badge">Uploaded</span>
                                    </div>
                                )
                            ))}
                        </div>
                        <hr />
                    </>
                )} */}

                {/* {renderSection('Guarantors', allData[8], 'cyan')}
                <hr />
                {renderSection('Witness Information', allData[9], 'yellow')} */}

                {/* Confirmation */}
                <div className="confirmation-box">
                    <input
                        type="checkbox"
                        id="confirmation"
                        checked={confirmed}
                        onChange={(e) => setConfirmed(e.target.checked)}
                    />
                    <label htmlFor="confirmation">
                        I confirm that all information provided is true and correct
                    </label>
                    <p className="confirmation-note">
                        By checking this box, you declare that all information in this application is accurate and complete.
                        Providing false information may result in rejection of the application.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="form-actions">
                    {onPrevious && (
                        <button type="button" className="btn outline" onClick={onPrevious}>
                            ← Previous
                        </button>
                    )}
                    <button
                        type="submit"
                        className="btn primary"
                        disabled={!confirmed || isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                </form>
            </div>
        </div>
    );
};
