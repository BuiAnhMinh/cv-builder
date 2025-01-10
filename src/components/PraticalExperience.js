import React, {useState} from "react";

const PracticalExperience = () => {
    const [experience, setExperience] = useState({
        company: '',
        position: '',
        responsibilities: '',
        fromDate: '',
        toDate: '',
    });
    const [isEditing, setIsEditing] = useState(true);

    const handlePracticalChange = (e) => {
        const {name, value } = e.target;
        setExperience({...experience, [name] : value});
    };

    return(
        <div className="practical-experience">
            {isEditing ? (
                <form>
                    <input name="company" value={experience.company} onChange={handlePracticalChange} placeholder="Company"></input>
                    <input name="position" value={experience.position} onChange={handlePracticalChange} placeholder="Position"></input>
                    <textarea name="responsibilities" value={experience.responsibilities} onChange={handlePracticalChange} placeholder="Responsibilities"/>
                    <input name="fromDate" value={experience.fromDate} onChange={handlePracticalChange} placeholder="From Date"></input>
                    <input name="toDate" value={experience.toDate} onChange={handlePracticalChange} placeholder="To Date"></input>
                    <button type="button" onClick={() => setIsEditing(false)}>Submit</button>
                </form>
            ): (
            <div>
                <p>Company : {experience.company}</p>
                <p>Position : {experience.position}</p>
                <p>Responsibilities: {experience.responsibilities}</p>
                <p>From : {experience.fromDate}</p>
                <p>To : {experience.toDate}</p>
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </div>)}
        </div>
    );
}

export default PracticalExperience;
