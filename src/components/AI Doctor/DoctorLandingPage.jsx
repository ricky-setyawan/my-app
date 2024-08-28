import React, { useState } from "react";
import DoctorStart from "../AI Doctor/DoctorStart";
import DoctorAge from "../AI Doctor/DoctorAge";
import DoctorGender from "../AI Doctor/DoctorGender";
import DoctorMedicalHistory from "./DoctorMedicalHistory";
import DoctorSymptoms from "./DoctorSymptoms";
import DoctorDayRange from "./DoctorDayRange";

function DoctorLandingPage() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const skipStep = () => setStep(step + 1);

  switch (step) {
    case 1:
      return <DoctorStart next={nextStep} />;
    case 2:
      return <DoctorGender next={nextStep} prev={prevStep} skip={skipStep} />;
    case 3:
      return <DoctorAge next={nextStep} prev={prevStep} skip={skipStep} />;
    case 4:
      return (
        <DoctorMedicalHistory next={nextStep} prev={prevStep} skip={skipStep} />
      );
    case 5:
      return <DoctorSymptoms next={nextStep} prev={prevStep} skip={skipStep} />;
    case 6:
      return <DoctorDayRange next={nextStep} prev={prevStep} />;
    default:
      return (
        <div className="min-h-screen bg-[#2d2d2d] text-white flex flex-col items-center justify-center">
          Completed. Wait for Page to Reload in 10 seconds
        </div>
      );
  }
}

export default DoctorLandingPage;
