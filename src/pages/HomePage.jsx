import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import asyncUsersAndThreads from '../states/shared/action'
import { addUsersActionCreator } from "../states/users/action";
import { asyncAddThread } from '../states/threads/action'
import Thread from '../components/thread'
import { InputTypeText, InputTypeTextarea } from '../components/inputForm'
import { Link } from "react-router-dom";

function HomePage({threads, users}) {

    const { 
        authUser,
    } = useSelector((states) => states)

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [category, setCategory] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncUsersAndThreads())
    }, [dispatch])

    const submitAddThread = ({ title, body, category, event }) => {
        event.preventDefault()
        dispatch(asyncAddThread({ title, body, category }))
        dispatch(addUsersActionCreator(authUser))
    }

    function addThread() {
        
        if(!authUser) {
            return (
                <div className="threads_form">
                    <p><b><Link to={'/login'}>Login</Link></b> dahulu untuk membuat threads</p>
                </div>
            )
        }

        return (
            <>  
                <form className="threads_form" onSubmit={(event) => submitAddThread({ title, body, category, event })}>
                    <InputTypeText value={title} setValue={setTitle} placeHolder="Judul"/>
                    <InputTypeTextarea value={body} setValue={setBody} placeHolder="Deskripsi"/>
                    <InputTypeText value={category} setValue={setCategory} placeHolder="Kategory"/>
                    <button type="submit">Buat thread</button>
                </form>
            </>
        )
    }

    return (
        <>  
            {addThread()}
            <div className="threads">
                {
                    threads.map((talk) => <Thread key={talk.id} thread={talk} user={users.filter((user) => user.id === talk.ownerId)} />)
                }
            </div>
        </>
    )
}

HomePage.propTypes = {
    threads: PropTypes.array,
    users: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}



export default HomePage