import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { asyncReceiveThreadDetail } from '../states/thread/action'

function BodyTalk({ id="", title="", body="", comment="", category, classNamee="" }) {

    const dispatch = useDispatch()

    const onClickDetail = (id) => {
        dispatch(asyncReceiveThreadDetail(id))
    }

    function Uicomment() {
        if (typeof(comment) !== 'object') {
            return (
                <p>Komentar {`(${comment})`}</p>
            )
        }
        return null
    }

    return (
        <div className={`thread_body${classNamee}`}>
            <h3><Link to={`/detail/${id}`} onClick={() => onClickDetail(id)}>{ title }</Link></h3>
            <p>{ body }</p>
            <div>
                <p>#{category}</p>
                { Uicomment() }
            </div>
        </div>
    )
}

function BodyComment({ title="" }) {
    return (
        <div className='body_comment'>
            <p>{ title }</p>
        </div>
    )
}

BodyTalk.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    comment: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    classNamee: PropTypes.string
}

BodyComment.propTypes = {
    title: PropTypes.string.isRequired,
}

export {
    BodyTalk,
    BodyComment
}