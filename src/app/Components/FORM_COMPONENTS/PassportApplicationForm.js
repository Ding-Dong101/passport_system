import { useState } from 'react';
// import { format } from 'date-fns';
import { ArrowRight } from "react-bootstrap-icons"

export const PassportApplicationForm = ({ data, onNext }) => {
    const [formData, setFormData] = useState({
        passportType: '',
        amountPaid: '',
        paymentStatus: '',
        dateOfRegistration: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext(formData);
    };

    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        setFormData((prev) => ({ ...prev, dateOfRegistration: selectedDate }));
    };

    return (
        <div className="form-card">
            <div className="form-header">
                <h2>Passport Application Details</h2>
                <p>Please provide the basic details for your passport application</p>
            </div>
            <form onSubmit={handleSubmit} className="form-grid">
                <div className="form-group">
                    <label htmlFor="passportType">Passport Type</label>
                    <select
                        id="passportType"
                        value={formData.passportType}
                        onChange={(e) =>
                            setFormData((prev) => ({ ...prev, passportType: e.target.value }))
                        }
                        required
                    >
                        <option value="">Select passport type</option>
                        <option value="standard">Standard</option>
                        <option value="express">Express</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="amountPaid">Amount Paid (GHS)</label>
                    <input
                        id="amountPaid"
                        type="number"
                        value={formData.amountPaid}
                        onChange={(e) =>
                            setFormData((prev) => ({ ...prev, amountPaid: e.target.value }))
                        }
                        placeholder="Enter amount paid"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="paymentStatus">Payment Status</label>
                    <select
                        id="paymentStatus"
                        value={formData.paymentStatus}
                        onChange={(e) =>
                            setFormData((prev) => ({ ...prev, paymentStatus: e.target.value }))
                        }
                        required
                    >
                        <option value="">Select payment status</option>
                        <option value="paid">Paid</option>
                        <option value="pending">Pending</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="dateOfRegistration">Date of Registration</label>
                    <input
                        id="dateOfRegistration"
                        type="date"
                        value={
                            formData.dateOfRegistration ? '' : 'yyyy-MM-dd'
                        }
                        onChange={handleDateChange}
                        required
                    />
                </div>


            </form>
        </div>
    );
};
