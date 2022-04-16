import React from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }
    const handleRegister = event => {
        event.preventDefault();
        // console.log(event.target.password.value);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }
    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='Your Name' id="" />
                <br />
                <input type="email" name="email" placeholder='Email Address' id="" required />
                <br />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-decoration-none text-danger pe-auto' onClick={navigateLogin}>Please Login</Link ></p>
        </div >
    );
};

export default Register;