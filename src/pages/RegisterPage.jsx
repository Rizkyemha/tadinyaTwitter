/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { InputTypeText, InputTypePassword } from "../components/inputForm"
import { asyncRegisterUser } from "../states/user/action"
import { asyncSetAuthUser } from "../states/authUser/action"

function RegisterPage(authUser){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const navigate = useNavigate();

    useEffect(() => {
        if(authUser.authUser !== null) {
            navigate("/")
        }
    }, [authUser])

    const register = (name, email, password, event) => {
        event.preventDefault()
        dispatch(asyncRegisterUser({ name, email, password }))
        dispatch(asyncSetAuthUser({ email, password }))
    }

    return (
        <>
            <form className="form" onSubmit={(event) => register(name, email, password, event)}>
                <h2 className="form_title">Daftar Akun</h2>
                <InputTypeText value={name} setValue={setName} placeHolder="Nama baru" />
                <InputTypeText value={email} setValue={setEmail} placeHolder="Email" />
                <InputTypePassword value={password} setValue={setPassword} placeHolder="Password" />
                <div>
                    <p>Sudah punya akun ? <Link to={"/login"}>Login</Link> disini</p>
                    <button type="submit">Masuk</button>
                </div>
            </form>
        </>
    )
}

export default RegisterPage