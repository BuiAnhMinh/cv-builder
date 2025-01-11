import React, { useState } from "react";
import '../styles/styles.css';



const GeneralInfo = ({ setGeneralInfo }) => {
    const [info, setInfo] = useState({ name: "", email: "", phone: "", summary: "" });
    const [isEditing, setIsEditing] = useState(true);
    const [errors, setErrors] = useState({});

    const validateInputs = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;

        if (!info.name) newErrors.name = "Name is required!";
        if (!info.email) {
            newErrors.email = "Email is required!";
        } else if (!emailRegex.test(info.email)) {
            newErrors.email = "Invalid email format!";
        }
        if (!info.phone) {
            newErrors.phone = "Phone is required!";
        } else if (!phoneRegex.test(info.phone)) {
            newErrors.phone = "Invalid phone number (10 digits required)!";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validateInputs()) {
            setIsEditing(false);
            setGeneralInfo(info); // Update generalInfo in the parent component
        }
    };

    const handleInfoChange = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
    };

    return (
        <div className="general-info">
            {isEditing ? (
                <form>
                    <div>
                        <input
                            name="name"
                            value={info.name}
                            onChange={handleInfoChange}
                            placeholder="Name"
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                    <div>
                        <input
                            name="email"
                            value={info.email}
                            onChange={handleInfoChange}
                            placeholder="Email"
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div>
                        <input
                            name="phone"
                            value={info.phone}
                            onChange={handleInfoChange}
                            placeholder="Phone"
                        />
                        {errors.phone && <span className="error">{errors.phone}</span>}
                    </div>
                    <div>
                        <textarea
                            name="summary"
                            value={info.summary}
                            onChange={handleInfoChange}
                            placeholder="Summary"
                        />
                    </div>
                    <button type="button" onClick={handleSubmit}>
                        Add
                    </button>
                </form>
            ) : (
                <div>
                    <p><strong>Name:</strong> {info.name}</p>
                    <p><strong>Email:</strong> {info.email}</p>
                    <p><strong>Phone:</strong> {info.phone}</p>
                    <p><strong>Summary:</strong> {info.summary}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )}
        </div>
    );
};

export default GeneralInfo;
