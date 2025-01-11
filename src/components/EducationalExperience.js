import React, { useState } from "react";
import '../styles/styles.css';

const EducationalExperience = ({ setEducationList }) => {
    const [educationList, setLocalEducationList] = useState([]);
    const [education, setEducation] = useState({
        school: "",
        studyTitle: "",
        fromDate: "",
        toDate: "",
    });
    const [errors, setErrors] = useState({});
    const [addedSchools, setAddedSchools] = useState([]); // Track all added schools

    const validateInputs = () => {
        const newErrors = {};
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

        if (!education.school) newErrors.school = "School name is required!";
        if (!education.studyTitle) newErrors.studyTitle = "Study title is required!";
        if (!education.fromDate) {
            newErrors.fromDate = "Start date is required!";
        } else if (!dateRegex.test(education.fromDate)) {
            newErrors.fromDate = "Start date must be in YYYY-MM-DD format!";
        }
        if (!education.toDate) {
            newErrors.toDate = "End date is required!";
        } else if (!dateRegex.test(education.toDate)) {
            newErrors.toDate = "End date must be in YYYY-MM-DD format!";
        }
        if (education.fromDate && education.toDate && education.fromDate > education.toDate) {
            newErrors.toDate = "End date must be after the start date!";
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
            const updatedEducationList = [...educationList, education];
            setLocalEducationList(updatedEducationList);
            setEducationList(updatedEducationList); // Update parent state
            setAddedSchools([...addedSchools, education.school]); // Add to school list
            setEducation({
                school: "",
                studyTitle: "",
                fromDate: "",
                toDate: "",
            }); // Reset fields
            setErrors({});
        }
    };

    return (
        <div className="educational-experience">
            <h2>Educational Experience</h2>
            <h3>Added Schools</h3>
            <ul>
                {addedSchools.map((school, index) => (
                    <li key={index}>{school}</li>
                ))}
            </ul>
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
                    <label>From Date:</label>
                    <input
                        name="fromDate"
                        type="date"
                        value={education.fromDate}
                        onChange={handleEducationChange}
                    />
                    {errors.fromDate && <span className="error">{errors.fromDate}</span>}
                </div>
                <div>
                    <label>To Date:</label>
                    <input
                        name="toDate"
                        type="date"
                        value={education.toDate}
                        onChange={handleEducationChange}
                    />
                    {errors.toDate && <span className="error">{errors.toDate}</span>}
                </div>
                <button type="button" onClick={handleAddEducation}>
                    Add
                </button>
            </form>
        </div>
    );
};

export default EducationalExperience;
