import React, { useState } from 'react';
import ClinicalNotesPage from './ClinicalNotesPage';
import ClinicalNotesPromptPage from './ClinicalNotesPromptPage';
import ClinicalNotesSubjectivePage from './ClinicalNotesSubjectivePage';
import ClinicalNotesObjectivePage from './ClinicalNotesObjectivePage';
import ClinicalNotesPlanPage from './ClinicalNotesPlanPage';

const ClinicalNotesFlow = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    if (currentPage < 5) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <ClinicalNotesPage next={nextPage} />;
      case 2:
        return <ClinicalNotesPromptPage next={nextPage} prev={prevPage} />;
      case 3:
        return <ClinicalNotesSubjectivePage next={nextPage} prev={prevPage} />;
      case 4:
        return <ClinicalNotesObjectivePage next={nextPage} prev={prevPage} />;
      case 5:
        return <ClinicalNotesPlanPage prev={prevPage} />;
      default:
        return <ClinicalNotesPage next={nextPage} />;
    }
  };

  return <div>{renderPage()}</div>;
};

export default ClinicalNotesFlow;
