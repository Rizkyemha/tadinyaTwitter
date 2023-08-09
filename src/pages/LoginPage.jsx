/* eslint-disable react-hooks/exhaustive-deps */

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { InputTypeText, InputTypePassword } from "../components/inputForm"
import { asyncSetAuthUser } from "../states/authUser/action"
import { useEffect } from "react"


function LoginPage(authUser){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const navigate = useNavigate();

    useEffect(() => {
        if(authUser.authUser !== null) {
            navigate("/")
        }
    }, [authUser])

    const login = (email, password, event) => {
        event.preventDefault()
        dispatch(asyncSetAuthUser({email, password}))
    }

    return (
        <>  
            <form className="form" onSubmit={(event) => login(email, password, event)}>
                <h2 className="form_title">Masuk</h2>
                <InputTypeText value={email} setValue={setEmail} placeHolder="Email" />
                <InputTypePassword value={password} setValue={setPassword} placeHolder="Password" />
                <div>
                    <p>Belum memiliki akun ? <Link to={"/register"}>Register</Link> disini</p>
                    <button type="submit">Masuk</button>
                </div>
            </form>
        </>
    )
}

export default LoginPage