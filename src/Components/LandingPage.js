import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './LandingPage.css'
import axios from "axios"

export default function LandingPage() {

    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')
    let [loginMessage, setLoginMessage] = useState('Login')
    let [signupMessage, setSignupMessage] = useState('Sign Up')
    const backend = require('../BackEnd/backendLink')
    let navigate = useNavigate()

    function login() {
        if (username !== '' && password !== '') {
            axios.post(`${backend}/login`, {
                username: username,
                password: password
            }).then(res => {
                if (res.data.message === 'ok') {
                    localStorage.setItem('userId', res.data.userId)
                    navigate('/yourpage')
                } else {
                    alert(res.data.message)
                }
            })
        } else {
            alert('Username and Password can not be empty')
        }
    }

    function signup() {
        if (username !== '' && password !== '') {
            axios.post(`${backend}/signup`, {
                username: username,
                password: password
            }).then(res => {
                if (res.data === 'ok') {
                    alert('sign up done! please login')
                } else {
                    alert(res.data)
                }
            })
        } else {
            alert('Username and Password can not be empty')
        }
    }

    return <div className="landing-page">
        <div className="inputs">
            <div>
                Log in <br />
                <input placeholder="username" onChange={(e) => { setUsername(e.target.value) }} /><br />
                <input placeholder="password" onChange={(e) => { setPassword(e.target.value) }} /><br />
                <button onClick={login}>{loginMessage}</button>
            </div>
            Don't have an Account?<br />
            <input placeholder="username" onChange={(e) => { setUsername(e.target.value) }} /><br />
            <input placeholder="password" onChange={(e) => { setPassword(e.target.value) }} /><br />
            <button onClick={signup}>{signupMessage}</button>
        </div>

    </div>
}