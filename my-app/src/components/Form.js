import "./FormStyles.css";

import React from 'react';

function Form() {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text" required></input>
            <label>Email</label>
            <input type="email" required></input>
            <label>Subject</label>
            <input type="text" required></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type Your Message Here"></textarea>
            <button className="btn">Submit</button>
        </form>
    </div>
  );
};

export default Form;