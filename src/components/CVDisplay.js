import React from 'react';
import GeneralInfo from './GeneralInfo';
import EducationalExperience from './EducationalExperience';
import PracticalExperience from './PracticalExperience';
import '../styles/styles.css';



const CVDisplay = ({ generalInfo, educationList, experienceList }) => (
  <div className="cv-display">
    <h1>{generalInfo.name}'s CV</h1>
    <section className="general-info-display">
      <h2>General Information</h2>
      <p><strong>Name:</strong> {generalInfo.name}</p>
      <p><strong>Email:</strong> {generalInfo.email}</p>
      <p><strong>Phone:</strong> {generalInfo.phone}</p>
      <p><strong>Summary:</strong> {generalInfo.summary}</p>
    </section>
    <section className="education-display">
      <h2>Educational Experience</h2>
      {educationList.length > 0 ? (
        educationList.map((edu, index) => (
          <div key={index}>
            <p><strong>School:</strong> {edu.school}</p>
            <p><strong>Title of Study:</strong> {edu.studyTitle}</p>
            <p><strong>From Date:</strong> {edu.fromDate}</p>
            <p><strong>To Date:</strong> {edu.toDate}</p>
          </div>
        ))
      ) : (
        <p>No educational experience added.</p>
      )}
    </section>
    <section className="experience-display">
      <h2>Practical Experience</h2>
      {experienceList.length > 0 ? (
        experienceList.map((exp, index) => (
          <div key={index}>
            <p><strong>Company:</strong> {exp.company}</p>
            <p><strong>Position:</strong> {exp.position}</p>
            <p><strong>Responsibilities:</strong> {exp.responsibilities}</p>
            <p><strong>From:</strong> {exp.fromDate}</p>
            <p><strong>To:</strong> {exp.toDate}</p>
          </div>
        ))
      ) : (
        <p>No practical experience added.</p>
      )}
    </section>
  </div>
);

export default CVDisplay;