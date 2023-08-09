import PropTypes from 'prop-types'

function ActionThread({ createdAt }) {
    return (
        <div className="action">
            <p>{createdAt}</p>
        </div>
    )
}

ActionThread.propTypes = {
    createdAt: PropTypes.string.isRequired,
}

export default ActionThread