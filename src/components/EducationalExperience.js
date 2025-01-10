import React, {useState} from "react";

const EducationalExperience= () => {
    const [education, setEducation] = useState({school: '', studyTitle: '', studyDate: ''});
    const [isEditing, setIsEditing] = useState(true);

    const handleEducationChange = (e) => {
        const {name, value} = e.target;
        setEducation({...education, [name]: value});
    };

    return (
        <div className="educational-experience">
            {isEditing ? (
                <form>
                    <input name="school" value={education.school} onChange={handleEducationChange} placeholder="School"></input>
                    <input name="studyTitle" value={education.studyTitle} onChange={handleEducationChange} placeholder="Study Title"></input>
                    <input name="studyDate" value={education.studyDate} onChange={handleEducationChange} placeholder="Study Date"></input>
                    <button type="button" onClick={() => setIsEditing(false)}>Submit</button>
                </form>
            ) : (
                <div>
                    <p>School: {education.school}</p>
                    <p>Title of Study: {education.studyTitle}</p>
                    <p>Date of Study: {education.studyDate}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )}
        </div>
    );
};

export default EducationalExperience;
