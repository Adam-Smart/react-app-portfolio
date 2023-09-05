import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contact() {
    const formData = { userName: "", userEmail: "", userMessage: "" };
    const [data, setData] = useState(formData);
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setData({ ...data, [id]: value });
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`Message Sent!`);
        setData(formData);
    };
    return (
        <Row>
            <Col sm={9}>
                <form style={{paddingBottom:"22%"}} onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="userName"
                            placeholder="Enter Name Here"
                            value={data.userName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="userEmail"
                            placeholder="Enter Email Here"
                            value={data.userEmail}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Message</label>
                        <textarea
                            className="form-control"
                            id="userMessage"
                            rows="3"
                            placeholder="Enter Message Here"
                            onChange={handleInputChange}
                            value={data.userMessage}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">
                        Send
                    </button>
                </form>
            </Col>
        </Row>
    )
}
export default Contact;