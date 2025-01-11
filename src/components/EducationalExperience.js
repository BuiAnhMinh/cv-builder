import React, { useState } from "react";

const EducationalExperience = () => {
    const [educationList, setEducationList] = useState([]);
    const [education, setEducation] = useState({ school: "", studyTitle: "", studyDate: "" });
    const [isEditing, setIsEditing] = useState(true);
    const [errors, setErrors] = useState({});

    const validateInputs = () => {
        const newErrors = {};
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // ISO date format YYYY-MM-DD

        if (!education.school) newErrors.school = "School name is required!";
        if (!education.studyTitle) newErrors.studyTitle = "Study title is required!";
        if (!education.studyDate) {
            newErrors.studyDate = "Study date is required!";
        } else if (!dateRegex.test(education.studyDate)) {
            newErrors.studyDate = "Study date must be in YYYY-MM-DD format!";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleEducationChange = (e) => {
        const { name, value } = e.target;
        setEducation({ ...education, [name]: value });
    };

    const handleAddEducation = () => {
        if (validateInputs()) {
            setEducationList([...educationList, education]);
            setEducation({ school: "", studyTitle: "", studyDate: "" }); // Reset fields
            setErrors({});
        }
    };

    return (
        <div className="educational-experience">
            {isEditing ? (
                <form>
                    <div>
                        <input
                            name="school"
                            value={education.school}
                            onChange={handleEducationChange}
                            placeholder="School"
                        />
                        {errors.school && <span className="error">{errors.school}</span>}
                    </div>
                    <div>
                        <input
                            name="studyTitle"
                            value={education.studyTitle}
                            onChange={handleEducationChange}
                            placeholder="Study Title"
                        />
                        {errors.studyTitle && <span className="error">{errors.studyTitle}</span>}
                    </div>
                    <div>
                        <input
                            name="studyDate"
                            type="date"
                            value={education.studyDate}
                            onChange={handleEducationChange}
                            placeholder="Study Date"
                        />
                        {errors.studyDate && <span className="error">{errors.studyDate}</span>}
                    </div>
                    <button type="button" onClick={handleAddEducation}>
                        Add
                    </button>
                    <button type="button" onClick={() => setIsEditing(false)}>
                        Done
                    </button>
                </form>
            ) : (
                <div>
                    {educationList.length > 0 ? (
                        educationList.map((entry, index) => (
                            <div key={index}>
                                <p><strong>School:</strong> {entry.school}</p>
                                <p><strong>Title of Study:</strong> {entry.studyTitle}</p>
                                <p><strong>Date of Study:</strong> {entry.studyDate}</p>
                            </div>
                        ))
                    ) : (
                        <p>No educational experience added yet.</p>
                    )}
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )}
        </div>
    );
};

export default EducationalExperience;
