import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { name, email, phone } = inputs;
  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });


    const onSubmitForm = async (e) => {
      e.preventDefault();
      try {
        const body = { name, email, phone };
        const response = await fetch("http://localhost:3001/contact", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(body),
        });
        navigate("/thanks");
  
        
      } catch (err) {
        console.error(err.message);
      }
    };

  return (
    <div id ="formsign" className="wrapper">
        <form
          className="w3-container w3-card-4 forminput"
          onSubmit={onSubmitForm}
        >
          <h2 className="formCol">Sign Up Here</h2>
          <p>Sign up for our mailing list and GroupMe to find out about our upcoming events and news.</p>
          <p>
            <label className="formCol">
              <b>Name</b>
            </label>
            <input
              className="w3-input w3-border"
              name="name"
              type="text"
              value={name}
              onChange={(e) => onChange(e)}
              required
            />
          </p>
          <p>
            <label className="formCol">
              <b>Email</b>
            </label>
            <input
              className="w3-input w3-border"
              name="email"
              type="text"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </p>
          <p>
            <label className="formCol">
              <b>Phone Number</b>
            </label>
            <input
              className="w3-input w3-border"
              name="phone"
              type="text"
              value={phone}
              onChange={(e) => onChange(e)}
              required
            />
          </p>
          <p>
            <button className="formColB">Sign Up</button>
          </p>
        </form>
    </div>
  )
}

export default Form