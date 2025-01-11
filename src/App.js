import React, { useState } from "react";
import GeneralInfo from './components/GeneralInfo';
import EducationalExperience from './components/EducationalExperience';
import PracticalExperience from './components/PracticalExperience';
import CVDisplay from './components/CVDisplay';
import './styles/styles.css';



const App = () => {
  const [generalInfo, setGeneralInfo] = useState(null);
  const [educationList, setEducationList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitAll = () => {
    if (!generalInfo || educationList.length === 0 || experienceList.length === 0) {
      alert("Please fill out all sections before submitting.");
    } else {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="app">
      {!isSubmitted ? (
        <>
          <h1>CV Builder</h1>
          <GeneralInfo setGeneralInfo={setGeneralInfo} />
          <EducationalExperience setEducationList={setEducationList} />
          <PracticalExperience setExperienceList={setExperienceList} />
          <button onClick={handleSubmitAll} className="submit-all-btn">
            Submit All
          </button>
        </>
      ) : (
        <CVDisplay
          generalInfo={generalInfo}
          educationList={educationList}
          experienceList={experienceList}
        />
      )}
    </div>
  );
};

export default App;
