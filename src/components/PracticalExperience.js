import React, { useState } from "react";
import '../styles/styles.css';

const PracticalExperience = ({ setExperienceList }) => {
    const [experienceList, setLocalExperienceList] = useState([]);
    const [experience, setExperience] = useState({
        company: "",
        position: "",
        responsibilities: "",
        fromDate: "",
        toDate: "",
    });
    const [errors, setErrors] = useState({});
    const [addedCompanies, setAddedCompanies] = useState([]); // Track all added companies

    const validateInputs = () => {
        const newErrors = {};
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

        if (!experience.company) newErrors.company = "Company name is required!";
        if (!experience.position) newErrors.position = "Position is required!";
        if (!experience.responsibilities) newErrors.responsibilities = "Responsibilities are required!";
        if (!experience.fromDate) {
            newErrors.fromDate = "Start date is required!";
        } else if (!dateRegex.test(experience.fromDate)) {
            newErrors.fromDate = "Start date must be in YYYY-MM-DD format!";
        }
        if (!experience.toDate) {
            newErrors.toDate = "End date is required!";
        } else if (!dateRegex.test(experience.toDate)) {
            newErrors.toDate = "End date must be in YYYY-MM-DD format!";
        }
        if (experience.fromDate && experience.toDate && experience.fromDate > experience.toDate) {
            newErrors.toDate = "End date must be after the start date!";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handlePracticalChange = (e) => {
        const { name, value } = e.target;
        setExperience({ ...experience, [name]: value });
    };

    const handleAddExperience = () => {
        if (validateInputs()) {
            const updatedExperienceList = [...experienceList, experience];
            setLocalExperienceList(updatedExperienceList);
            setExperienceList(updatedExperienceList); // Update parent state
            setAddedCompanies([...addedCompanies, experience.company]); // Add to company list
            setExperience({
                company: "",
                position: "",
                responsibilities: "",
                fromDate: "",
                toDate: "",
            }); // Reset fields
            setErrors({});
        }
    };

    return (
        <div className="practical-experience">
            <h2>Practical Experience</h2>
            <h3>Added Companies</h3>
            <ul>
                {addedCompanies.map((company, index) => (
                    <li key={index}>{company}</li>
                ))}
            </ul>
            <form>
                <div>
                    <input
                        name="company"
                        value={experience.company}
                        onChange={handlePracticalChange}
                        placeholder="Company"
                    />
                    {errors.company && <span className="error">{errors.company}</span>}
                </div>
                <div>
                    <input
                        name="position"
                        value={experience.position}
                        onChange={handlePracticalChange}
                        placeholder="Position"
                    />
                    {errors.position && <span className="error">{errors.position}</span>}
                </div>
                <div>
                    <textarea
                        name="responsibilities"
                        value={experience.responsibilities}
                        onChange={handlePracticalChange}
                        placeholder="Responsibilities"
                    />
                    {errors.responsibilities && <span className="error">{errors.responsibilities}</span>}
                </div>
                <div>
                    <label>From Date:</label>
                    <input
                        name="fromDate"
                        type="date"
                        value={experience.fromDate}
                        onChange={handlePracticalChange}
                    />
                    {errors.fromDate && <span className="error">{errors.fromDate}</span>}
                </div>
                <div>
                    <label>To Date:</label>
                    <input
                        name="toDate"
                        type="date"
                        value={experience.toDate}
                        onChange={handlePracticalChange}
                    />
                    {errors.toDate && <span className="error">{errors.toDate}</span>}
                </div>
                <button type="button" onClick={handleAddExperience}>
                    Add
                </button>
            </form>
        </div>
    );
};

export default PracticalExperience;
