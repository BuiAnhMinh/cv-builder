import React, { useState } from "react";

const GeneralInfo = () => {
    const [info, setInfo] = useState({name: '', email: '', phone: '', summary: ''});
    const [isEditing, setIsEditing] = useState(true);

    const handleInfoChange = (e) =>{
        const {name, value} = e.target;
        setInfo({...info, [name]: value});
    };

    return (
        <div className="general-info">
            {isEditing ? (
                <form>
                    <input name ="name" value = {info.name} onChange={handleInfoChange} placeholder="Name"></input>
                    <input name ="email" value= {info.email} onChange={handleInfoChange} placeholder="Email"></input>
                    <input name ="phone" value={info.phone} onChange={handleInfoChange} placeholder="Phone"></input>
                    <textarea name ="summary" value={info.summary} onChange={handleInfoChange} placeholder="Summary"/>
                    <button type="button" onClick={() => setIsEditing(false)}>Submit</button>
                </form>
            ) : (
                <div>
                    <p>Name : {info.name}</p>
                    <p>Email : {info.email}</p>
                    <p>Phone: {info.phone}</p>
                    <p>Summary : {info.summary}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )}
        </div>
    );
};

export default GeneralInfo;