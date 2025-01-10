import React from 'react';
import GeneralInfo from './Generalnfo';
import EducationalExperience from './EducationalExperience';
import PracticalExperience from './PraticalExperience';


const CVDisplay = () => (
  <div className="cv-display">
    <h1>CV Builder</h1>
    <GeneralInfo />
    <EducationalExperience />
    <PracticalExperience />
  </div>
);

export default CVDisplay;
