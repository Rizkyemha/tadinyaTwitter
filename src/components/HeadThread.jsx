import PropTypes from 'prop-types'
import ProfileThread from "./ProfileThread"
import ActionThread from "./ActionThread"

function HeadThread({ user={}, thread={} }) {

    return (
        <div className='thread_head'>
            < ProfileThread img={user[0].avatar} name={user[0].name} email={user[0].email} />
            < ActionThread createdAt={thread.createdAt} />
        </div>
    )
}

HeadThread.propTypes = {
    user: PropTypes.array.isRequired,
    thread: PropTypes.object.isRequired,
    voteType:  PropTypes.number.isRequired,
    onClick: PropTypes.array
}

export default HeadThread