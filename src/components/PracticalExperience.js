import React, { useState } from "react";

const PracticalExperience = () => {
    const [experienceList, setExperienceList] = useState([]);
    const [experience, setExperience] = useState({
        company: '',
        position: '',
        responsibilities: '',
        fromDate: '',
        toDate: '',
    });
    const [isEditing, setIsEditing] = useState(true);
    const [errors, setErrors] = useState({});

    const validateInputs = () => {
        const newErrors = {};
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // ISO date format YYYY-MM-DD

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
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handlePracticalChange = (e) => {
        const { name, value } = e.target;
        setExperience({ ...experience, [name]: value });
    };

    const handleAddExperience = () => {
        if (validateInputs()) {
            setExperienceList([...experienceList, experience]);
            setExperience({
                company: '',
                position: '',
                responsibilities: '',
                fromDate: '',
                toDate: '',
            }); // Reset fields
            setErrors({});
        }
    };

    return (
        <div className="practical-experience">
            {isEditing ? (
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
                        <input
                            name="fromDate"
                            type="date"
                            value={experience.fromDate}
                            onChange={handlePracticalChange}
                            placeholder="From Date"
                        />
                        {errors.fromDate && <span className="error">{errors.fromDate}</span>}
                    </div>
                    <div>
                        <input
                            name="toDate"
                            type="date"
                            value={experience.toDate}
                            onChange={handlePracticalChange}
                            placeholder="To Date"
                        />
                        {errors.toDate && <span className="error">{errors.toDate}</span>}
                    </div>
                    <button type="button" onClick={handleAddExperience}>
                        Add
                    </button>
                    <button type="button" onClick={() => setIsEditing(false)}>
                        Done
                    </button>
                </form>
            ) : (
                <div>
                    {experienceList.length > 0 ? (
                        experienceList.map((entry, index) => (
                            <div key={index}>
                                <p><strong>Company:</strong> {entry.company}</p>
                                <p><strong>Position:</strong> {entry.position}</p>
                                <p><strong>Responsibilities:</strong> {entry.responsibilities}</p>
                                <p><strong>From:</strong> {entry.fromDate}</p>
                                <p><strong>To:</strong> {entry.toDate}</p>
                            </div>
                        ))
                    ) : (
                        <p>No practical experience added yet.</p>
                    )}
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )}
        </div>
    );
};

export default PracticalExperience;
