import React, { useState } from 'react';
import AiLawyer from './AiLawyer';
import AiLawyerPage from './AiLawyerPage';
import AiLawyerAskQuestion from './AiLawyerAskQuestion';
import AiLawyerAskQuestionInput from './AiLawyerAskQuestionInput';

function LawyerLandingPage() {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);
    const closeStep = () => setStep(1);

    switch (step) {
        case 1:
            return <AiLawyer next={nextStep} />;
        case 2:
            return <AiLawyerPage next={nextStep} prev={prevStep} close={closeStep} />;
        case 3:
            return <AiLawyerAskQuestion next={nextStep} prev={prevStep} close={closeStep} />;
        case 4:
            return <AiLawyerAskQuestionInput next={nextStep} prev={prevStep} close={closeStep} />;
        default:
            return (
                <div className="min-h-screen bg-[#2d2d2d] text-white flex flex-col items-center justify-center">
                    Completed AI-Lawyer. Wait for Page to Reload in 10 seconds
                </div>
            );
    }
}

export default LawyerLandingPage;
