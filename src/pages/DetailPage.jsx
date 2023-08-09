import { useState } from "react"
import LoadingBar from "react-redux-loading-bar"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import ProfileThread from "../components/ProfileThread"
import ActionThread from "../components/ActionThread"
import { BodyTalk } from "../components/BodyThread"
import { InputTypeTextarea } from "../components/inputForm"
import { asyncAddComment } from "../states/thread/action"
import ThreadComment from "../components/threadComment"

function DetailPage() {


    const thread = useSelector((states) => states.thread)
    const authUser = useSelector((states) => states.authUser)
    const [comment, setComment] = useState('')

    const dispatch = useDispatch()

    const addComment = (content, threadId, event) => {
        event.preventDefault()
        dispatch(asyncAddComment({content, threadId}))
    }

    if(thread === null) {
        return (
            <LoadingBar />
        )
    }

    function inputComment() {
        if(authUser === null) {
            return (
                <p className="action_add_comment"><b><Link to={'/login'}>Login</Link></b> terlebih dahulu untuk membuat comment</p>
            )
        }

        return (
            <form className="add_comment_form" onSubmit={(event) => addComment(comment, thread.id, event)}>
                <InputTypeTextarea value={comment} setValue={setComment} placeHolder="Komentar"/>
                <button type="submit">komentar</button>
            </form>
        )
    }

    return (
        <>  
            <div className="thread">
                <div className='thread_head'>
                    < ProfileThread img={thread.owner.avatar} name={thread.owner.name} />
                    < ActionThread voteType={0} totalUpVotes={thread.upVotesBy} totalDownVotes={thread.downVotesBy} createdAt={thread.createdAt} onClick={[]}/>
                </div>
                <BodyTalk id={thread.id} title={thread.title} body={thread.body} comment={thread.comments} category={thread.category} classNamee="_comment" />
            </div>
            <div className="thread_comment">
            {inputComment()}
            <h4>Komentar {`(${thread.comments.length})`} :</h4>
            <div className="comment_list">
            {
                thread.comments.map((comment) => <ThreadComment key={comment.id} comment={comment}/>)
            }
            </div>
            </div>
        </>
    )
}

export default DetailPage