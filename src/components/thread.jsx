import PropTypes from 'prop-types'
import HeadThread from "./HeadThread"
import { BodyTalk } from "./BodyThread"
import { useState } from 'react'

function Thread({thread, user}) {

    const [voteType, setVoteType] = useState(0)

    const onClickUp = () => {
        if (voteType === 0) {
            return setVoteType(1)
        }
        return setVoteType(0)
    }

    const onClickDown = () => {
        if (voteType === 0) {
            return setVoteType(-1)
        }
        return setVoteType(0)
    }

    return (
        <div className="thread">
            <HeadThread user={[...user]} thread={thread} onClick={[onClickUp,onClickDown]} voteType={voteType}/>
            <BodyTalk id={thread.id} title={thread.title} body={thread.body} comment={thread.totalComments} category={thread.category} />
        </div>
    )
}


Thread.propTypes = {
    user: PropTypes.array.isRequired,
    thread: PropTypes.object.isRequired,
    onClick: PropTypes.func,
}

export default Thread