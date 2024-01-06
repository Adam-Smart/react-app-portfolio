// export default Contact;
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const formData = { userName: "", userEmail: "", userMessage: "" };
const checkData = () => {
        if (!(data.userName || data.userEmail || data.userMessage)) return;
    
        const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    
        if (!data.userName) {
          return false
        }
        if (!data.userEmail) {
          return false
        } else if (!re.test(data.userEmail)) {
          return false
        }
        if (!data.userMessage) {
          return false
        }
        return true;
      };
    

    const [data, setData] = useState(formData);
    const handleInputChange = (e) => {
       
        const { id, value } = e.target;

        setData({ ...data, [id]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (!checkData()) return;
        emailjs.send("service_fs8dqec", "template_udgstmi", data, "sxFPgJ1vh89x4hJu3").then( async (result) => {
            setData((prevState) => ({
                ...prevState,
                userName:"",
                userEmail:"",
                userMessage:""
            }));
            e.target.reset();
            alert(`Message was successfully sent, thank you ${data.userName}`);
        },
        (error) => {
            console.log(error.text);
        });
    
    }
    return (
    <div>
      <h1 >Contact Page</h1>
      <p>
      You can also find on social media linked at the bottom of the page
      </p>
      <form onSubmit={sendEmail}>
                   <div className="form-group">
                       <label htmlFor="exampleFormControlInput1">Name</label>
                       <input
                            type="text"
                            className="form-control"
                            id="userName"
                            placeholder="Please enter your Name here"
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
                            placeholder="Please enter your Email address here"
                            value={data.userEmail}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Message</label>
                        <textarea
                            className="form-control"
                            id="userMessage"
                            placeholder="Please enter your Message here"
                            onChange={handleInputChange}
                            value={data.userMessage}
                        ></textarea>
                    </div>
                    <button style={{ background: '#b62075', border: 'none', 
                    marginTop: '10px', 
                    margin: 'auto',
                    alignItems: 'center',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',}}
                    onMouseOver={e => e.currentTarget.style.opacity = 0.7}
                    onMouseOut={e => e.currentTarget.style.opacity = 1} type="submit" className="btn btn-primary mb-2">
                        Submit
                    </button>
                </form>
    </div>
  );
}

export default Contact;