import PropTypes from 'prop-types'
import { BodyComment } from "./BodyThread"
import ProfileThread from "./ProfileThread"

function ThreadComment({comment}) {

    return (
        <div className="thread">
            <div className='thread_head'>
            < ProfileThread img={comment.owner.avatar} name={comment.owner.name} />
            <BodyComment title={comment.createdAt} />
        </div>
        <BodyComment title={comment.content} />
    </div>
    )
}

ThreadComment.propTypes = {
    comment: PropTypes.object
}



export default ThreadComment