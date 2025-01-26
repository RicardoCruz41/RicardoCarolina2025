import React, { useState } from "react";
import axios from "axios";
import VandelliGardenImage3 from '../images/Vandelli garden 3.jpg';
import './style/AttendanceForm.css';
import { FormattedMessage } from 'react-intl';

const AttendanceForm = ({ apiEndpoint, currentLanguage, }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        restrictions: "",
        isAttending: true,
        message: "",
        language: currentLanguage
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(apiEndpoint, formData);
            alert("Thank you for confirming your attendance! You will receive an email soon with the details");

            setFormData({
                name: "",
                email: "",
                restrictions: "",
                isAttending: true,
                message: "",
                language: currentLanguage
            });

        } catch (err) {
            alert("Sorry, something went wrong. Please try again later");
        }
    };

    return (
        <div className="attendance-form">
            <img className="img-form" src={VandelliGardenImage3} />
            <div className="form-div">
                <div className="form-body">
                    <h2 className="attendanceForm-Title">
                        <FormattedMessage id="attendanceForm-Title" defaultMessage="Attendance Confirmation" />
                    </h2>
                <br/>
                    <form onSubmit={handleSubmit} >
                        <label className="attendanceForm-label">
                            <FormattedMessage id="attendanceForm-Name" defaultMessage="Name" />
                        </label>
                        <input className="text-input" type="text" name="name" value={formData.name} onChange={handleChange} required />
                        <br /><br />
                        <label className="attendanceForm-label">
                            <FormattedMessage id="attendanceForm-Email" defaultMessage="Email" />
                        </label>
                        <input className="text-input" type="email" name="email" value={formData.email} onChange={handleChange} required />
                        <br /><br />
                        <label className="attendanceForm-label">
                            <FormattedMessage id="attendanceForm-FoodRestrictions" defaultMessage="Food Restrictions" />
                        </label>
                        <input className="text-input" type="text" name="restrictions" value={formData.restrictions} onChange={handleChange} required />
                        <br /><br />
                        <label className="attendanceForm-label">
                            <FormattedMessage id="attendanceForm-InAttendance" defaultMessage="In Attendance?" />
                        </label>
                        <div>
                            <label className="attendanceForm-label"  style={{ marginRight: "15px" }}>
                                <input className="radio-input" type="radio" name="isAttending" value={true} checked={formData.isAttending === true} onChange={() => setFormData((prev) => ({ ...prev, isAttending: true }))} />
                                <FormattedMessage id="attendanceForm-InAttendance-Yes" defaultMessage="Yes" />
                            </label>
                            <label className="attendanceForm-label" style={{ marginRight: "15px" }}>
                                <input className="radio-input" type="radio" name="isAttending" value={false} checked={formData.isAttending === false} onChange={() => setFormData((prev) => ({ ...prev, isAttending: false }))}/>
                                <FormattedMessage id="attendanceForm-InAttendance-No" defaultMessage="No" />
                            </label>
                        </div>
                        <br /><br />
                        <label className="attendanceForm-label">
                            <FormattedMessage id="attendanceForm-Message" defaultMessage="Message" />
                        </label>
                        <textarea className="message-input" name="message" value={formData.message} onChange={handleChange} required> </textarea>
                        <br /><br />
                        <button className="submit-button" type="submit">
                            <FormattedMessage id="attendanceForm-Submit" defaultMessage="Submit" />
                        </button>
                        <br /><br />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AttendanceForm;
