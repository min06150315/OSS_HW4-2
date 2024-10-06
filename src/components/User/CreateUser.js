import React, { useState } from 'react'
import {useNavigate } from "react-router-dom";
import Loader from '../Common/Loader';
import './User.css';
const CreateUser = () => {
    const navigate = useNavigate();
    const createUserApi = "https://66ff38172b9aac9c997e8ee3.mockapi.io/api/users"
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    {/* Edit */}
    const [user, setUser] = useState({
        name: "",
        rc: "",
        major: "",
        year: "",
        phone: ""
    })

    const handelInput = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        console.log(name, value)
        setUser({ ...user, [name]: value });
    }

    const handelSubmit = async (event) => {
        event.preventDefault();
        console.log(user)
        try {
            setIsLoading(true);
            const response = await fetch(createUserApi, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                console.log('Form submitted successfully!');
                {/* Edit */}
                setUser({name: "",rc: "",major: "",year: "",phone: ""})
                navigate('/show-user');
            } else {
                console.error('Form submission failed!');
            }

        } catch (error) {
            setError(error.message);
        } finally{
            setIsLoading(false);
        }
    }

    return (
        <div className='user-form'>
            <div className='heading'>
            {isLoading && <Loader />}
            {error && <p>Error: {error}</p>}
                <p>User Form</p>
            </div>
            <form onSubmit={handelSubmit}>
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={user.name} onChange={handelInput} />
                </div>
                {/* Edit */}
                <div className="mb-3 mt-3">
                    <label for="rc" className="form-label">RC</label>
                    <input type="text" className="form-control" id="rc" name="rc" value={user.rc} onChange={handelInput} />
                </div>
                {/* Edit */}
                <div className="mb-3 mt-3">
                    <label for="major" className="form-label">Major</label>
                    <input type="text" className="form-control" id="major" name="major" value={user.major} onChange={handelInput} />
                </div>
                {/* Edit */}
                <div className="mb-3 mt-3">
                    <label for="year" className="form-label">Year</label>
                    <input type="text" className="form-control" id="year" name="year" value={user.year} onChange={handelInput} />
                </div>
                {/* Edit */}
                <div className="mb-3">
                    <label for="phone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="phone" name="phone" value={user.phone} onChange={handelInput} />
                </div>
                <button type="submit" className="btn btn-primary submit-btn">Submit</button>
            </form>
        </div>
    )
}

export default CreateUser