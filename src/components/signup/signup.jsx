import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import Alert from 'react-bootstrap/Alert';
import { API } from "../global";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useState('Login');
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const data = { email, password };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState("Submitting...");
    setError("");

    if (!email) {
      setError("Email is required.");
      setState("Login");
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email.");
      setState("Login");
      return;
    } else if (!password || password.length < 5) {
      setError("Password must be at least 5 characters long.");
      setState("Login");
      return;
    }

    try {
      const response = await fetch(`${API}/users/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data1 = await response.json();
      if (response.ok) {
        localStorage.setItem("x-auth-token", data1.token);
        alert('Successfully Logged In');
        navigate("/home");
      } else {
        setError('Invalid Credentials');
        setState("Login");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("An error occurred. Please try again.");
      setState("Login");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="p-4 bg-white rounded shadow-sm w-100" style={{ maxWidth: '450px' }}>
        <div className="text-center">
          <Figure>
            <Figure.Image
              width={150}
              alt="Auth Image"
              src="https://cdn.arstechnica.net/wp-content/uploads/2022/03/multi-factor-authentication-mfa.jpeg"
            />
          </Figure>
          <h3 className="text-primary mb-3"><FaSignInAlt /> Login</h3>
        </div>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><b>Email Address</b></Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label><b>Password</b></Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="submit" disabled={state === "Submitting..."}>
              {state}
            </Button>
          </div>
        </Form>

        <div className="mt-3 text-center">
          <p>Don't have an account? <Button variant="link" onClick={() => navigate(`/signup`)}>Sign Up <FaUserPlus /></Button></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
