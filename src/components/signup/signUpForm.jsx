import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../global";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { FaUserPlus, FaArrowLeft } from "react-icons/fa";

const SignupForm = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [state, setState] = useState("Sign Up");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState("Submitting...");
    setError("");
    setSuccess(false);

    if (!data.email) {
      setError("Email is required.");
      setState("Sign Up");
      return;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      setError("Please enter a valid email.");
      setState("Sign Up");
      return;
    } else if (!data.password || data.password.length < 5) {
      setError("Password must be at least 5 characters long.");
      setState("Sign Up");
      return;
    }

    try {
      const response = await fetch(`${API}/users/signup`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setSuccess(true);
        setError("");
        setState("Sign Up");
        setTimeout(() => navigate("/"), 2000);
      } else {
        setError("Email already exists!");
        setState("Sign Up");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
      setState("Sign Up");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="p-4 bg-white rounded shadow-sm w-100" style={{ maxWidth: '400px' }}>
        <h3 className="text-center text-primary mb-4"><FaUserPlus /> Create Account</h3>

        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">Account created successfully! Redirecting...</Alert>}

        <Form onSubmit={handleSubmit} noValidate>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><b>Email Address</b></Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email address"
              onChange={handleChange}
              value={data.email}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label><b>Password</b></Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              value={data.password}
              required
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="submit" disabled={state === "Submitting..."}>
              {state}
            </Button>
            <Button variant="secondary" onClick={() => navigate("/")}>
              <FaArrowLeft /> Back
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignupForm;
