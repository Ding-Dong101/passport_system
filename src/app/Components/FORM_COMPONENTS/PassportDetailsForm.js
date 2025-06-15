import { useState, useEffect } from "react";
import "@/app/css/forms.css";

export function PassportDetailsForm({ data, onNext, onPrevious, setAllData, allData, step, setStep }) {
  const [formData, setFormData] = useState({
    package: '',
    applicationType: '',
  });

  useEffect(() => {
    // Optional: pass current formData to parent for state lifting
    onNext && onNext(formData);
  }, [formData, onNext]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  useEffect(() => {
    setAllData(formData);
  }, [formData, setAllData]);

  const handlePush = () => {
    localStorage.setItem('passportDetails', JSON.stringify(formData));
    const clientData = JSON.parse(localStorage.getItem('passportDetails'));
    console.log(clientData);
    setStep(step => step + 1)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (onNext) onNext(formData);
    handlePush()
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>Passport Details</h2>
      <p>Select your passport application package and type</p>

      <div className="form-group">
        <label>Package</label>
        <select
          name="package"
          value={formData.package}
          onChange={handleChange}
          required
        >
          <option value="">Select a package</option>
          <option value="standard">Standard</option>
          <option value="express">Express</option>
          <option value="premium">Premium</option>
        </select>
      </div>

      <div className="form-group">
        <label>Application Type</label>
        <select
          name="applicationType"
          value={formData.applicationType}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="new">New</option>
          <option value="renewal">Renewal</option>
        </select>
      </div>

      <div className="form-actions">
        {/* {onPrevious && <button type="button" onClick={onPrevious}>Previous</button>} */}
        <button type="submit">Save and move Next</button>
      </div>
    </form>
  );
}
