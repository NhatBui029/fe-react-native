import React, { useState } from 'react'
import { login, signup } from './data'
import './LoginSignup.scss'
import { Link } from 'react-router-dom';

const LoginSignUp = ({ type }) => {
    const initState = type === 'login' ? login : signup;
    const [model, setModel] = useState(initState)

    const handleModel = () => {
        setModel(type === 'login' ?  signup: login)
    }

    return (
        <div className='loginSignUp'>
            <div className="container">
                <h1>{model.title}</h1>
                <div className="textFields">
                    {model.data.map((type, index) => {
                        return <input type={type.type} placeholder={type.text} />
                    })}
                </div>
                <button>Continue</button>
                <Link to={model.url} className='noUnderline'>
                    <p onClick={handleModel}>{model.string1}<span>{model.string2}</span> </p>
                </Link>
                <div className="agree">
                    <input type='checkbox' name='agree'  />
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignUp