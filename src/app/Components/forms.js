// Forms.js
"use client";

import React from "react";
import "@/app/css/forms.css"
import { useState } from "react";
import { PersonalInformationForm } from "./FORM_COMPONENTS/ApplicationForm";
import { PassportDetailsForm } from "./FORM_COMPONENTS/PassportDetailsForm";
import { ContactInformationForm } from "./FORM_COMPONENTS/ContactInformationForm";
import { EducationForm } from "./FORM_COMPONENTS/EducationForm";
import { GuarantorsForm } from "./FORM_COMPONENTS/GuarantorsForm";
import { PassportApplicationForm } from "./FORM_COMPONENTS/PassportApplicationForm";
import { ResidentialInformationForm } from "./FORM_COMPONENTS/ResidentialInformationForm";
import { ReviewSubmitForm } from "./FORM_COMPONENTS/ReviewSubmitForm";
import { WitnessForm } from "./FORM_COMPONENTS/WitnessForm";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
// import MultiStepForm from "./FORM_COMPONENTS/multi";

export default function Forms({ onSubmit, formData, handleChange }) {
    const [step, setStep] = useState(0);
    const [allData, setAllData] = useState({});


    const steps = [
        <PassportDetailsForm key={step} setAllData={setAllData} allData={allData} step={step} setStep={setStep} />,
        <PersonalInformationForm key={step} setAllData={setAllData} allData={allData} step={step} setStep={setStep} />,
        <ContactInformationForm key={step} setAllData={setAllData} allData={allData} step={step} setStep={setStep} />,
        <EducationForm key={step} setAllData={setAllData} allData={allData} step={step} setStep={setStep} />,
        <ResidentialInformationForm key={step} setAllData={setAllData} allData={allData} step={step} setStep={setStep} />,
        <PassportApplicationForm key={step} setAllData={setAllData} allData={allData} step={step} setStep={setStep} />,
        <GuarantorsForm key={step} setAllData={setAllData} allData={allData} step={step} setStep={setStep} />,
        <WitnessForm key={step} setAllData={setAllData} allData={allData} step={step} setStep={setStep} />,


    ];

    const handleNext = (data) => {
        step >= steps.length - 1 ? '' :
            setStep(prev => prev + 1);
    };

    const handlePrevious = () => {
        step <= 0 ? '' :
            setStep(prev => prev - 1)
    };



    return (
        <span className="main-container">
            <div className="form-group">{step} {steps[step]}</div>

            <button onClick={handlePrevious} className="movement left">{<ArrowLeft />}</button>
            <button onClick={handleNext} className="movement right">{<ArrowRight />}</button>

        </span>

    );
}
